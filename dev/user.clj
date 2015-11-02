(ns user
  (:require [reloaded.repl :refer [system reset stop]]
            [guymover.web :as web]
            [guymover.core :as core]
            [clojure.core.async :as async
             :refer [go >! <! chan go-loop alt! alts!]]))


(defn repl-start []
  (core/start-server-control #'web/app 8008))

(defn srv-start
  [& {:keys [app port]}]
  (go (>! core/control {:op :start
                        :app app
                        :port port})))

(defn srv-stop
  []
  (go (>! core/control {:op :stop})))
