const {app, BrowserWindow, Menu, globalShortcut} = require('electron')
  
  let win
  
  function ready() {
    Menu.setApplicationMenu(null)
    win = new BrowserWindow({width: 8000, height: 6000, fullscreenable: true, images: true})
    win.maximize()
    win.loadURL("https://youtube.com/")
    win.on('closed', () => {
      win = null
    })
  }
  
  app.on('ready', ready)
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  app.on('activate', () => {
    if (win === null) {
      ready()
    }
  })
