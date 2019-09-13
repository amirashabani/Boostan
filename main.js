const {app, BrowserWindow} = require('electron')

let main_window

function create_main_window() {
    main_window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    main_window.loadFile('app/html/main_window.html')
}

app.on('ready', create_main_window)