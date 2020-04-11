const electron = require("electron");

let top;
electron.app.whenReady().then(() =>
{
    top = new electron.BrowserWindow(
    { 
        width : 800, 
        height : 540,
        webPreferences: 
        {
            nodeIntegration: true
        }
    });
    top.loadFile("index.html");
    top.webContents.openDevTools();
});