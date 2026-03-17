import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  sendMessage: (message) => ipcRenderer.send("message", message),
  onMessage: (callback) => ipcRenderer.on("message", callback),
});
