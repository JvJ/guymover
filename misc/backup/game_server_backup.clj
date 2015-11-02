(ns guymover.game-server
  "This namespace handles the server-side of the game."
  (:require [clojure.core.async :refer [>! <! alt! alts!
                                        chan go go-loop timeout]]
            [clojure.core.match :refer [match] :as mat]))


(defonce game-state
  (atom {}))

(defn update-game-state
  [g-state-atom]
  (reset! g-state-atom @g-state-atom))

(defn start-game-loop
  "Starts the game loop,
and pushes the game state to the
client at regular intervals.
Params:
Websock - the websocket channel."
  [websock
   control
   & {:keys [framerate]
      :or {framerate 60}}]
  (let [dt (/ 1000 framerate)]
    ;; Open a timeout channel to keep track
    ;; of the next time we need to push state
    ;; to the client
    (go-loop [frame 0
              to (timeout dt)
              g-state {}]
      (reset! game-state g-state)
      (alt!

        ;; Handle websocket messages (from the client)
        ;; TODO: Should each client be in its own
        ;; go block??
        websock ([val ch]
                 (match val
                        {:pos-update [id [dx dy]]} nil
                        :stop nil
                        :else (recur frame to g-state)))

        ;; Handle messages on the control channel
        control ([val ch]
                 (cond
                   (= )))
        
        to ([val ch]
            (>! websock (update-game-state game-state))
            (recur (inc frame)
                   (timeout dt)))
        ))))

(defn start-client-game-loop
  []
  nil)
