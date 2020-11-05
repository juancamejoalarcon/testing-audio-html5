import main from "./main";
import createMenu from './src/menu_buttons/menu_buttons';
window.createWaveAudioEditor = (id) => {
   document.getElementById(id).innerHTML = main;
   createMenu()
}
