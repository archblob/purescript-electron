module Electron.IpcMain
  ( on
  , once
  , removeListener
  , removeAllListeners
  ) where

import Prelude (Unit)
import Electron (ELECTRON)
import Electron.Event (Event)
import Control.Monad.Eff (Eff)
import Electron.IpcRenderer (Listener)
import Data.Maybe (Maybe)

foreign import on :: forall a eff . String -> Listener eff a -> Eff (electron :: ELECTRON | eff) Unit

foreign import once :: forall a eff . String -> Listener eff a -> Eff (electron :: ELECTRON | eff) Unit

foreign import removeListener :: forall a eff . String -> Listener eff a -> Eff (electron :: ELECTRON | eff) Unit

foreign import removeAllListeners :: forall eff . Maybe String -> Eff (electron :: ELECTRON | eff) Unit
