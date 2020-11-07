import runInitialCountDown from '../initial_countdown/inital_countdown'
import timer from '../timer/timer'
import { hide, show } from '../common'
import { initRecorder, destroyRecorder, getAudioRecorded } from '../wave/wave_recorder/wave_recorder'
import { createWave, getWaveSurfer, setEditorEvents, destroyWave } from '../wave/wave_editor/wave_editor'
import { newGalleryEl } from '../gallery/gallery'

let grabar_boton;
let play_boton;
let is_recording = false;
let is_editing = false;

const playerButtons = (enable) => {
    play_boton = document.querySelector('#' + window.soundSounerId).shadowRoot.querySelector('#play-button')
    const editor_buttons = document.querySelector('#' + window.soundSounerId).shadowRoot.querySelector('#wave-editor-buttons')
    if (!enable) {
        hide(play_boton)
        hide(editor_buttons)
    } else {
        show(play_boton)
        show(editor_buttons)
        play_boton.addEventListener('click', getWaveSurfer())
    }
}

const grabar = () => {
    if (is_editing) {
        newGalleryEl(getAudioRecorded()).then(() => {
            destroyWave()
            is_recording = false
            is_editing = false
            grabar()
        })
    } else {
        if (!is_recording) {
            is_recording = true
            grabar_boton.disabled = true
            runInitialCountDown().then(() => {
                grabar_boton.disabled = false
                grabar_boton.textContent = 'Finalizar'
                initRecorder().then(() => {
                    createWave()
                    playerButtons(true)
                    setEditorEvents()
                    is_editing = true
                })
                timer.initTimer().then(() => {
                    destroyRecorder()
                    grabar_boton.textContent = 'Grabar otro'
                })
            })
        } else {
            is_recording = false
            destroyRecorder()
            timer.destroyTimer()
            grabar_boton.textContent = 'Grabar otro'
        }
    }
}
const createMenu = () => {
    grabar_boton = document.querySelector('#' + window.soundSounerId).shadowRoot.querySelector('#grabar-button')
    grabar_boton.addEventListener('click', grabar)
    playerButtons(false)
}

export default createMenu