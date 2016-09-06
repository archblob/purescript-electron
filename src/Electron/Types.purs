module Electron.Types
  ( Listener
  , Channel
  ) where

import Prelude (Unit)
import Control.Monad.Eff (Eff)
import Electron (ELECTRON)
import Electron.Event (Event)


type Listener e a = Event -> a -> Eff (electron :: ELECTRON | e) Unit

type Channel = String
