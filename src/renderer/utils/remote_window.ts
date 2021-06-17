import type Electron from 'electron'
import type ElectronUtil from 'electron-util'

const { remote } = window.require('electron') as typeof Electron
const utils = window.require('electron-util') as typeof ElectronUtil

export default {
  window: remote.getCurrentWindow(),
  utils,
}
