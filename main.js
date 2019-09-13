const {app, BrowserWindow} = require('electron')

// the first window that opens up
let main_window

function create_main_window() {
    main_window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true // to be able to use NodeJS modules in renderer processes
        }
    })

    main_window.loadFile('app/html/main_window.html')
}

// create the main_window when app is ready
app.on('ready', create_main_window)