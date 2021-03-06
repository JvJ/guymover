(ns guymover.client
  (:require [quiescent.core :as q]
            [quiescent.dom :as d]
            [cljs.core.async :refer [put!]]
            [guymover.util :as u]
            [guymover.game-state :as b]
            [chord.client :refer [ws-ch]]
            [cljs.core.async :refer [<! >!]]
            )
  (:require-macros [cljs.core.async.macros :refer [go]]))


(def default-pix-to-cell 64)
(def default-canvas-dims [800 600])

(defn init-client
  "All the default initialization logic goes here."
  []
  (let [[dw dh] default-canvas-dims]
    (set! (.. js/document (getElementById "guyBoard") -width) dw)
    (set! (.. js/document (getElementById "guyBoard") -height) dh)))

(defn draw-board
  "Draw the board to the screen,
centered on the specified guy."
  [{:keys [dims guys]
    :as board}
   guy-id
   & {:keys [pix-to-cell]
      :or {pix-to-cell default-pix-to-cell}
      }]
  {:pre [dims guys board]}
  (let [canvas (. js/document getElementById "guyBoard")
        ctx (.getContext canvas "2d")
        [w h] dims

        [pw ph] (mapv #(* % pix-to-cell) dims)

        [cw ch] [(.-width canvas) (.-height canvas)]

        ;; Board width and height
        [bw bh] [(* w pix-to-cell) (* h pix-to-cell)]
        
        ;; We center the view on the current cell
        [px py :as pos] (:position (guys guy-id))

        ;; Offsets for the top and left
        [l t] [(- (/ cw 2) (* pix-to-cell (+ 0.5 px)))
               (- (/ ch 2) (* pix-to-cell (+ 0.5 py)))]
        ]
    ;; Draw the grid here
    (set! (.-strokeStyle ctx) "#000000")
    (. ctx beginPath)
    (doseq [x (range (inc w))]
      (. ctx moveTo (+ l (* x pix-to-cell)) t )
      (. ctx lineTo (+ l (* x pix-to-cell)) (+ t bh) ))
    (doseq [y (range (inc h))]
      (. ctx moveTo l (+ t (* y pix-to-cell)) )
      (. ctx lineTo (+ l bw) (+ t (* y pix-to-cell)) ))
    (. ctx stroke)

    ;; Draw the guys
    (doseq [[id {clr :color [x y] :position}] guys]
      (. js/console log (u/clr-hex clr))
      (set! (.-fillStyle ctx) (u/clr-hex clr))
      (. ctx beginPath)
      (. ctx arc
         (+ l (* (+ 0.5 px) pix-to-cell))
         (+ t (* (+ 0.5 px) pix-to-cell))
         (/ pix-to-cell 2.0)
         0 (* 2 (. js/Math -PI)))
      (. ctx fill)
      )
    ))

(defn main-loop [ws-url]
  (go ))

(def test-board
  (b/add-guy {} "Johnny" (u/new-uuid)))

(defn drawTest
  []
  (draw-board test-board (key (first (:guys test-board)))))
