-- prints n number of s strings seperated by newlines
repeatPrint :: Integer -> String -> IO ()
repeatPrint n s = putStrLn . unlines $ replicate n s

-- example usage
helloWorlds :: Integer -> IO ()
helloWorlds n = repeatPrint n "Hello World"
