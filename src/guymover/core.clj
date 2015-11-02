(ns guymover.core
  (:require [com.stuartsierra.component :as component]
            [org.httpkit.server :refer [run-server]]
            [guymover.web :as web]
            [clojure.core.async :as async
             :refer [go >! <! chan go-loop alt! alts!]]
            ))

(defonce
  ^{:doc
    "The control channel for the web server.
Here are the possible messages:
  {:op :start :port port :app app}
  {:op :stop}

  The start handler defaults to #'guymover.web/app
  "}
  control
  (chan))

(defn start-server-control
  [defaultapp defaultport]
  (go-loop [srv (web/start-server defaultapp defaultport)
            {:keys [op port app] :as msg} (<! control)]
    (case op
      :start (do (when srv
                   (println "Attempting to stop web server.")
                   (srv))
                 (println "Restarting web server.")
                 (recur (web/start-server (or app defaultapp)
                                          (or port defaultport))
                        (<! control)))
      :stop  (do (println "Stopping server.")
                 (web/stop-server srv)
                 (recur nil (<! control)))
      (recur srv (<! control)))))

(defn -main
  "The entry point.  It starts the web server."
  [& args]
  (start-server-control #'web/app 8008))
