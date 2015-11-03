(ns guymover.util-test
  (:require [guymover.util :as sut]
            [expectations :as e]))

(e/expect "#FFFFFF"
          (sut/clr-hex [255 255 255]))

(e/expect empty? (list))
