(ns guymover.web
  (:require [guymover.game-server :refer [game-state]]
            [guymover.util :as u]
            [chord.http-kit :refer [with-channel]]
            [org.httpkit.server :refer [run-server]]
            [compojure.core :refer [defroutes GET]]
            [compojure.route :refer [resources files]]
            [ring.util.response :refer [redirect]]))

(def ^:dynamic *current-app*
  (atom nil))

(defn ws-handler
  "Handles a websocket request."
  [req]
  (with-channel req ws-channel
    #_(start-game-loop ws-channel
                     
                     )))

(defroutes app
  ;; Websocket connection
  (GET "/ws" ws-handler) 
  ;; I want to redirect to index.html?user=id
  (GET "/user/:id" [id] 
       (let [new-id (u/new-uuid)]
         (redirect (str "/index.html?uid=" new-id))))
  ;; Catch-all
  (resources "/"))

(defn stop-server
  [server]
  (when server
    (server)))

(defn start-server
  "Start a server and add it to the current app."
  [handler port]
  (stop-server @*current-app*)
  (reset! *current-app*
          (run-server handler {:port port})))
