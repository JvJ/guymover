(ns guymover.game-server
  "This namespace handles the server-side of the game."
  (:require [clojure.core.async :refer [>! <! alt! alts!
                                        chan go go-loop timeout]]
            [clojure.core.match :refer [match] :as mat]
            [clojure.core.typed :refer [ann defalias HMap Int Str U Val]
             :as t]))

;;;; Type definitions
#_(defalias 
  )

(defonce game-state
  (atom {}))

(defn update-game-state
  "Update the current game state."
  [g-state]
  g-state)

(defn server-game-loop
  "Starts a game loop which clients can connect to."
  [])


(defn client-game-loop
  ""
  []
  )

