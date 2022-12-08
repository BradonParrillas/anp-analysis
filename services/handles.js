const { ipcMain } = require("electron");


const handles = function () {
    ipcMain.handle('ping', () => 'pong')
}


module.exports = {
    "handles": handles
}