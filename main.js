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

    // load the content of main_window
    main_window.loadFile('app/html/main_window.html')

    // open developer tools on start
    main_window.webContents.openDevTools()

    // dereference the main_window object when it's closed
    main_window.on('closed', () => {
        main_window = null
    })
}

// create the main_window when app is ready
app.on('ready', create_main_window)