(defproject guymover "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.58"]
                 [http-kit "2.1.18"]
                 [com.stuartsierra/component "0.3.0"]
                 [compojure "1.4.0"]
                 [quiescent "0.2.0-RC2"]
                 [expectations "2.1.3"]
                 [jarohen/chord "0.6.0"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/core.match "0.3.0-alpha4"]
                 [org.clojure/core.typed "0.3.14"]]
  :source-paths ["src"]
  :test-paths ["test"]
  :profiles {:dev {:plugins [[lein-cljsbuild "1.1.0"]
                             [lein-figwheel "0.4.0"]
                             [lein-expectations "0.0.8"]]
                   :dependencies [[reloaded.repl "0.2.0"]
                                  [lein-figwheel "0.4.0"]
                                  [com.cemerick/piggieback "0.2.2-SNAPSHOT"]]
                   :source-paths ["dev"]
                   :figwheel {:nrepl-port 7888}
                   :cljsbuild {:builds [{:source-paths ["src" "dev"]
                                         :figwheel true
                                         :compiler {:output-to "target/classes/public/app.js"
                                                    :output-dir "target/classes/public/out"
                                                    :optimizations :none
                                                    :recompile-dependents true
                                                    :source-map true}}]}}})
