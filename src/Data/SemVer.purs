module Data.SemVer where

import Prelude

import Data.Maybe

foreign import data Version :: *
foreign import satisfies :: Version -> String -> Boolean
foreign import valid :: String -> Maybe Version
foreign import clean :: String -> Maybe Version

foreign import _gt :: Version -> Version -> Boolean
foreign import _lt :: Version -> Version -> Boolean

foreign import toString :: Version -> String

instance showVersion :: Show Version where
  show = ("v" ++) <<< toString

instance eqVersion :: Eq Version where
  eq a b = toString a == toString b

instance ordVersion :: Ord Version where
  compare a b = if a == b then EQ
                else if _lt a b
                     then LT
                     else GT
