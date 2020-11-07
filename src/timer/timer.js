import Timer from 'easytimer.js';
const crono = new Timer();

const timer = {
    initTimer: () => {
        const cronoEl = document.querySelector('#' + window.soundSounerId).shadowRoot.getElementById('currentTime')
        const cronoContainer = document.querySelector('#' + window.soundSounerId).shadowRoot.getElementById('timer-container')
        cronoContainer.style.display = 'block'
            return new Promise((resolve, reject) => {
                crono.start({countdown: true, startValues: {seconds: 30}});
                cronoEl.textContent = crono.getTimeValues().toString()
                crono.addEventListener('secondsUpdated', function (e) {
                    cronoEl.textContent = crono.getTimeValues().toString()
                });
                crono.addEventListener('targetAchieved', (e) => {
                    cronoContainer.style.display = 'none'
                    resolve()
                });
            });
        },
    destroyTimer: () => {
        document.querySelector('#' + window.soundSounerId).shadowRoot.getElementById('timer-container').style.display = 'none'
        
    }
}

export default timer
