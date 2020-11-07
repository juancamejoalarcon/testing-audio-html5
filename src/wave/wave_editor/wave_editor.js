import WaveSurfer from 'wavesurfer.js';
import { getAudioRecorded } from '../wave_recorder/wave_recorder';

let height = 300;
let barHeight = 2;
let barWidth = 5;
let barGap = null;
let waveColor = 'red';
let backgroundColor = 'blue';
let wavesurferEditor;

const createWave = () => {
    if (wavesurferEditor) wavesurferEditor.destroy()
    wavesurferEditor = WaveSurfer.create({
        container: document.querySelector('#' + window.soundSounerId).shadowRoot.querySelector('#waveeditor'),
        barWidth,
        barHeight,
        barGap,
        height,
        backgroundColor,
        waveColor,
    });

    wavesurferEditor.on('error', function(e) {
        console.warn(e);
    });

    // Load audio from URL
    wavesurferEditor.loadBlob(getAudioRecorded());

}

const destroyWave = () => {
    wavesurferEditor.destroy()
}

const getWaveSurfer = () => {
    return wavesurferEditor.playPause.bind(wavesurferEditor)
}

const setEditorEvents = () => {
    document.querySelector('#' + window.soundSounerId).shadowRoot.getElementById('waveColorSelection').addEventListener('change', (e) => {
        waveColor = e.target.value;
        createWave()
    })
    document.querySelector('#' + window.soundSounerId).shadowRoot.getElementById('backgroundColorSelection').addEventListener('change', (e) => {
        backgroundColor = e.target.value;
        createWave()
    })
    document.querySelector('#' + window.soundSounerId).shadowRoot.getElementById('barWidthSelection').addEventListener('change', (e) => {
        barWidth = e.target.value;
        createWave()
    })
    document.querySelector('#' + window.soundSounerId).shadowRoot.getElementById('barHeightSelection').addEventListener('change', (e) => {
        barHeight = e.target.value;
        createWave()
    })
    document.querySelector('#' + window.soundSounerId).shadowRoot.getElementById('barGapSelection').addEventListener('change', (e) => {
        barGap = e.target.value;
        createWave()
    })
}

export { createWave, getWaveSurfer, setEditorEvents, destroyWave }