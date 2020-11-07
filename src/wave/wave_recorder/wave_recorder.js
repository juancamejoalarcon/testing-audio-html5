import WaveSurfer from 'wavesurfer.js';
import MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.min.js';

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var wavesurfer, context, processor, mediaRecorder, audioBlob;
let audioChunks = [];

const initRecorder = () => {
    return new Promise((resolve, reject) => {
        if (isSafari) {
            // Safari 11 or newer automatically suspends new AudioContext's that aren't
            // created in response to a user-gesture, like a click or tap, so create one
            // here (inc. the script processor)
            var AudioContext =
                window.AudioContext || window.webkitAudioContext;
            context = new AudioContext();
            processor = context.createScriptProcessor(1024, 1, 1);
        }

        // Init wavesurfer
        wavesurfer = WaveSurfer.create({
            container: document.querySelector('#' + window.soundSounerId).shadowRoot.querySelector('#waverecorder'),
            waveColor: 'black',
            interact: false,
            cursorWidth: 0,
            audioContext: context || null,
            audioScriptProcessor: processor || null,
            plugins: [
                MicrophonePlugin.create({
                    bufferSize: 4096,
                    numberOfInputChannels: 1,
                    numberOfOutputChannels: 1,
                    constraints: {
                        video: false,
                        audio: true
                    }
                })
            ]
        });

        wavesurfer.microphone.on('deviceReady', (stream) => {
            console.info('Device ready!');
            audioChunks = []
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();
            mediaRecorder.addEventListener('dataavailable', event=>{
                audioChunks.push(event.data);              
            })

            mediaRecorder.addEventListener("stop", () => {
                audioBlob = new Blob(audioChunks);
                wavesurfer.destroy()
                resolve()
            });
        });
        wavesurfer.microphone.on('deviceError', function(code) {
            console.warn('Device error: ' + code);
        });
        wavesurfer.on('error', function(e) {
            console.warn(e);
        });
        wavesurfer.microphone.start();
    });
}

const destroyRecorder = () => {
    wavesurfer.microphone.stop()
}

const getAudioRecorded = () => {
    return audioBlob
}



export { initRecorder, destroyRecorder, getAudioRecorded }

