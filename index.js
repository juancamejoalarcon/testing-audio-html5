import main from "./main";
import mainCss from "./main.css.js"
import createMenu from './src/menu_buttons/menu_buttons';
import { createShadowDom } from './src/common'
window.createWaveAudioEditor = (id) => {
   const div = document.createElement( "div" )
   div.innerHTML = main;
   createShadowDom(id, div, mainCss)
   window.soundSounerId = id
   createMenu()
}

// Local
// const localDiv = document.createElement( "div" )
// localDiv.id = 'prueba'
// document.body.appendChild(localDiv)
// const div = document.createElement( "div" )
// div.innerHTML = main;
// createShadowDom('prueba', div, mainCss)
// window.soundSounerId = 'prueba'
// createMenu()

