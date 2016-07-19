module Electron.IpcRenderer
  ( Listener
  , on
  , once
  , removeListener
  , removeAllListeners
  , send
  , sendSync
  , sendToHost
  ) where

import Prelude (Unit)
import Data.Maybe (Maybe)
import Control.Monad.Eff (Eff)
import Electron (ELECTRON)
import Electron.Event (Event)

-- | Listening for Messages

type Listener e a = Event -> a -> Eff (electron :: ELECTRON | e) Unit

foreign import on :: forall a eff . String -> Listener eff a -> Eff (electron :: ELECTRON | eff) Unit

foreign import once :: forall a eff . String -> Listener eff a -> Eff (electron :: ELECTRON | eff) Unit

foreign import removeListener :: forall a eff . String -> Listener eff a -> Eff (electron :: ELECTRON | eff) Unit

foreign import removeAllListeners :: forall eff . Maybe String -> Eff (electron :: ELECTRON | eff) Unit

-- | Sending Messages

foreign import send :: forall a eff . String -> a -> Eff (electron :: ELECTRON | eff) Unit

foreign import sendSync :: forall a eff . String -> a -> Eff (electron :: ELECTRON | eff) Unit

foreign import sendToHost :: forall a eff . String -> a -> Eff (electron :: ELECTRON | eff) Unit
