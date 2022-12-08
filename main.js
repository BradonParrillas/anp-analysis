const { app, BrowserWindow } = require("electron");

const config = require("./config/default")
const service = require("./services/handles")

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: config.preload,
        },
    });

    /**
     * @handles
     * Este servicio es una funcion pone a dispocision las funciones que comunican la app con la interfaz y viceversa
     */
    service.handles()

    win.loadFile(config.view);
};

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
