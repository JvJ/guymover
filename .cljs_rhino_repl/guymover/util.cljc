(ns guymover.util
  #?@(:cljs ((:require [goog.string :as gstring]
                       [goog.string.format]))
            :clj ()))

(defn stringf
  [fmt & rest]
  #?(:clj (apply format fmt rest)
     :cljs (apply gstring/format fmt rest)))

(defn clr-hex
  "Converts rgb colors to hex."
  [[r g b]]
  #?(:clj (stringf "#%02x%02x%02x" r g b)
     :cljs (letfn [(hex-string [s]
                     (let [ret (.toString s 16)]
                       (case (count ret)
                         1 (str "0" ret)
                         ret)))]
             (str "#" (hex-string r)
                  (hex-string g)
                  (hex-string b)
                  ))))

(defn clr-dist2
  [clr1 clr2]
  (->> (map - clr2 clr1)
       (map #(* % %))
       (reduce +)))

(defn new-uuid
  "Generate a random UUID in clojure or clojurescript."
  []
  #?(:clj (java.util.UUID/randomUUID)
     :cljs (random-uuid)))

(defn clr-dist
  [clr1 clr2]
  (->> (clr-dist2 clr1 clr2)
       #?(:clj (Math/sqrt)
          :cljs (.sqrt js/Math))))

(defn clr-gen
  "Given a set of existing colors,
attempt to generate a random color
that is at least a distance of threshold
from all existing colors.

If this cant't be done in the specified
number of retries, the furthest color from
all existing colors is picked."
  [color-set & {:keys [retries
                       threshold]
                :or {retries 10
                     threshold 5}}]
  {:pre [(set? color-set)]}
  (let [gens (for [i (range retries)]
               (let [clr [(rand-int 256)
                          (rand-int 256)
                          (rand-int 256)]]
                 {:clr clr
                  :dist (apply max
                               (cons 0
                                     (map #(clr-dist clr %)
                                          color-set)))}))]

    
    (or (:clr (first (filter #(>= (:dist %) threshold) gens)))
        (:clr (apply max-key :dist gens)))))

(defn add-color
  [colors & {:keys [retries
                    threshold]
             :or {retries 10
                  threshold 5}}]
  (conj colors (clr-gen colors
                        :retries retries
                        :threshold threshold)))

