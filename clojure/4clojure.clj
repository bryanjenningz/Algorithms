;; 4clojure problems

;; 1
(= true true)

;; 2
(= (- 10 (* 2 3)) 4)

;; 3
(= "HELLO WORLD" (.toUpperCase "hello world"))

;; 4
(= (list :a :b :c) '(:a :b :c))

;; 5
(= '(1 2 3 4) (conj '(2 3 4) 1))

;; 6
(= [:a :b :c] (list :a :b :c) (vec '(:a :b :c)) (vector :a :b :c))

;; 7
(= [1 2 3 4] (conj [1 2 3] 4))

;; 8
(= #{:a :b :c :d} (set '(:a :a :b :c :c :c :c :d :d)))
(= #{:a :b :c :d} (clojure.set/union #{:a :b :c} #{:b :c :d}))

;; 9
(= #{1 2 3 4} (conj #{1 4 3} 2))

;; 10
(= 20 ((hash-map :a 10, :b 20, :c 30) :b))
(= 20 (:b {:a 10, :b 20, :c 30}))

;; 11
(= {:a 1, :b 2, :c 3} (conj {:a 1} (hash-map :b 2) [:c 3]))

;; 12
(= 3 (first '(3 2 1)))
(= 3 (second [2 3 4]))
(= 3 (last (list 1 2 3)))

;; 13
(= (conj [] 20 30 40) (rest [10 20 30 40]))

;; 14
(= 8 ((fn add-five [x] (+ x 5)) 3))
(= 8 ((fn [x] (+ x 5)) 3))
(= 8 (#(+ % 5) 3))
(= 8 ((partial + 5) 3))

;; 15
(= (#(* 2 %) 2) 4)
(= ((partial * 2) 3) 6)
(= ((fn [x] (* 2 x)) 11) 22)
(= (#(* 2 %) 7) 14)

;; 16
(= (#(str "Hello, " % "!") "Dave") "Hello, Dave!")
(= (#(format "Hello, %s!" %) "Jenn") "Hello, Jenn!")
(= ((fn [name] (str "Hello, " name "!")) "Rhea") "Hello, Rhea!")

;; 17
(= (range 6 9) (map #(+ % 5) '(1 2 3)))

;; 18
(= '(6 7) (filter #(> % 5) '(3 4 5 6 7)))

;; 19
(= ((comp first reverse) [1 2 3 4 5]) 5)
(= (#(first (reverse %)) '(5 4 3)) 3)
(= (#(-> % reverse first) ["b" "c" "d"]) "d")

;; 20
(= (#(-> % reverse second) (list 1 2 3 4 5)) 4)
(= ((comp second reverse) ["a" "b" "c"]) "b")
(= (#(nth (reverse %) 1) [[1 2] [3 4]]) [1 2])

;; 21
(= (#(first (drop %2 %1)) '(4 5 6 7) 2) 6)
(= ((fn [xs n] (first (drop n xs))) [:a :b :c] 0) :a)
(= (#(->> %1 (drop %2) first) [1 2 3 4] 1) 2)
(= (#((vec %1) %2) '([1 2] [3 4] [5 6]) 2) [5 6])

;; 22
(= (reduce (fn [c _] (inc c)) 0 '(1 2 3 3 1)) 5)
(= (#(reduce + (map (constantly 1) %)) "Hello World") 11)
(= ((comp (partial reduce +) (partial map (constantly 1))) [[1 2] [3 4] [5 6]]) 3)
(= (#(reduce + (map (fn [_] 1) %)) '(13)) 1)
(= ((comp (partial reduce +) (partial map (fn [_] 1))) '(:a :b :c)) 3)

;; 23
(= (into () [1 2 3 4 5]) [5 4 3 2 1])
(= (reduce conj () (sorted-set 5 7 2 7)) '(7 5 2))
(= (apply conj () [[1 2][3 4][5 6]]) [[5 6][3 4][1 2]])

;; 24
(= (reduce + [1 2 3]) 6)
(= (apply + (list 0 -2 5 5)) 8)

;; 25
(= (filter #(= (rem % 2) 1) #{1 2 3 4 5}) '(1 3 5))
(= (filter odd? [4 2 1 6]) '(1))

;; 26
(= ((fn [n]
    (loop [i 0 r [] a 1 b 1]
      (if (= i n)
        r
        (recur (inc i) (conj r a) b (+ a b))))) 3) '(1 1 2))
(= (#(take % ((fn fib [a b] (cons a (lazy-seq (fib b (+ a b))))) 1 1)) 6) '(1 1 2 3 5 8))
(= (#(take % (map first (iterate (fn [[a b]] [b (+ a b)]) [1 1]))) 8) '(1 1 2 3 5 8 13 21))

;; 27
(false? (#(= (reverse (vec %)) (vec %)) '(1 2 3 4 5)))
(true? (#(= (reverse %) (seq %)) "racecar"))

;; 28
(= ((comp (partial remove coll?) (partial tree-seq coll? seq)) '((1 2) 3 [4 [5 6]])) '(1 2 3 4 5 6))
(= ((fn flat [x]
      (if (coll? x)
        (mapcat flat x)
        [x])) ["a" ["b"] "c"]) '("a" "b" "c"))
(= (#(remove coll? (tree-seq coll? seq %)) '((((:a))))) '(:a))
