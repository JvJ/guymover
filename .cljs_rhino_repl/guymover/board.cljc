(ns guymover.board
  (:require [guymover.util :as u])
  )

;;;; The guymover board!
;;;; A board consists of dimensions,
;;;; which equal the number of players
;;;; plus extracells.



(def ^:const extracells
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
