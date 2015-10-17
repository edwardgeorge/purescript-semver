module Data.SemVer where

import Prelude

import Data.Maybe

foreign import data Version :: *
foreign import data Range :: *

foreign import parseVersion :: String -> Maybe Version
foreign import parseVersionLoose :: String -> Maybe Version
foreign import versionToString :: Version -> String

foreign import major :: Version -> Int
foreign import minor :: Version -> Int
foreign import patch :: Version -> Int

foreign import parseRange :: String -> Maybe Range
foreign import parseRangeLoose :: String -> Maybe Range
foreign import rangeToString :: Range -> String

foreign import satisfies :: Version -> Range -> Boolean

foreign import compareVersions :: Version -> Version -> Ordering

instance showVersion :: Show Version where
  show = ("v" ++) <<< versionToString

instance eqVersion :: Eq Version where
  eq a b = compareVersions a b == EQ

instance ordVersion :: Ord Version where
  compare = compareVersions

instance showRange :: Show Range where
  show = show <<< rangeToString
