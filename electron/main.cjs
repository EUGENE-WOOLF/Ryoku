const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    // backgroundColor: "#0b0b0f",
  });

  win.loadURL("http://localhost:5173");
}

app.whenReady().then(createWindow);
