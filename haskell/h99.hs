myLast :: [a] -> a
myLast xs = head $ reverse xs

myReverse :: [a] -> [a]
myReverse [] = []
myReverse (x:xs) = myReverse xs ++ [x]
