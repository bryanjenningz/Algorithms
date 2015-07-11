-- Credit card number validator that uses the checkSum algorithm.
checkSum :: Integer -> Bool
checkSum x = validate $ sum . doubleEveryOther $ toDigitsRev x

toDigitsRev :: Integer -> [Integer]
toDigitsRev x 
    | x <= 0    = []
    | otherwise = (x `mod` 10) : toDigitsRev (x `div` 10)

doubleEveryOther :: [Integer] -> [Integer]
doubleEveryOther (x:y:zs) = x : (2 * y) : doubleEveryOther zs
doubleEveryOther (x:ys)   = x : ys
doubleEveryOther []       = []

validate :: Integer -> Bool
validate x = x `mod` 10 == 0

main = do 
    print $ checkSum 123456
