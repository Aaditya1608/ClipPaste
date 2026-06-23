// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const {
  contextBridge,
  ipcRenderer
} = require('electron');
contextBridge.exposeInMainWorld(
  'electronAPI',
  {
    getClipboardText: () =>
      ipcRenderer.invoke(
        'clipboard:readText'
      ),

    setClipboardText: (text) =>
      ipcRenderer.invoke(
        'clipboard:writeText',
        text
      ),
  }
);