(ns guymover.game-state
  "Defines the game board and state."
  (:require [guymover.util :as u]
            #?(:clj [clojure.core.typed
                     :refer [
                             ann def-alias]
                     :as t]
               :cljs [cljs.core.typed
                      
                      :as t]))
  
  #?@(:cljs [(:require-macros [cljs.core.typed
                                :refer [ann def-alias]
                                :as t])]
            :clj ()))

;;;; The guymover board!
;;;; A board consists of dimensions,
;;;; which equal the number of players
;;;; plus extracells.

#?(:clj (def-alias Uuid java.util.UUID)
   :cljs (def-alias Uuid cljs.core/UUID))

(def-alias Point
  ;;"An x and y coordinate."
  (t/HVec [t/Int t/Int]))

(def-alias Color
  ;;"An RGB color"
  (t/HVec [t/Int t/Int t/Int]))

(def-alias Guy
  ;;"An individual guy on the guy board."
  (t/HMap :mandatory
          {:name t/Str
           :color Color}))

(def-alias Board
  ;;"A game board!"
  (t/HMap :mandatory
          {:dims Point
           :guys (t/Map t/Any Guy) ; TODO: Get a type for UUID?
           }))

(ann extracells t/Int)
(def extracells
  "Add this to the number of players
  to get the board size."
  3)

(defn add-guy
  "Add a guy and return the board."
  [{:keys [dims guys] :as board
    :or {dims [extracells extracells]
         guys {}}}
   guy-name
   guy-id]
  {:pre [(not (guys guy-name))]}
  (let [colors (set (map :color guys))
        new-color (u/clr-gen colors)
        dim (+ extracells 1 (count guys))
        new-guy {:name guy-name
                 :color new-color

                 :id guy-id
                 :position [(dec dim) (dec dim)]}]
    (-> board
        (assoc :dims [dim dim])
        (update :guys #(assoc % guy-id  new-guy)))))
