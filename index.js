'use strict';
const electron = require('electron');
var menubar = require('menubar');

var mb = menubar({index:"https://mail.google.com/mail/mu/", tooltip: "Correo", icon:__dirname + "/res/icon.png", width:360, height:640});

const contextMenu = electron.Menu.buildFromTemplate([
  {
    label: 'About',
    click() {
      electron.dialog.showMessageBox({title: "Correo", type:"info", message: "A menubar/taskbar Gmail App \nMIT Copyright (c) 2016 Amit Merchant <bullredeyes@gmail.com>", buttons: ["Close"] });
    }
  },
  {
    label: 'Website',
    click() {
      electron.shell.openExternal("https://github.com/amitmerchant1990/correo");
    }
  },
  {
    type: 'separator'
  },
  {
    label: 'Quit',
    click() {
      mb.app.quit();
    }
  }

]);

mb.on('ready', function ready () {
  console.log('Correo is ready to serve in the menubar.');

  mb.tray.setContextMenu(contextMenu);
});
