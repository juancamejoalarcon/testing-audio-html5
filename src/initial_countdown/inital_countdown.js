const runInitialCountDown = () => {
    const nums = document.querySelector('#' + window.soundSounerId).shadowRoot.querySelectorAll('.nums span');
    const counter = document.querySelector('#' + window.soundSounerId).shadowRoot.querySelector('.counter');
    counter.style.display = 'block'
    return new Promise((resolve, reject) => {
        const time = 400;
        nums[0].classList.add('in');
        nums[0].classList.remove('out');
        setTimeout(() => {
            nums[0].classList.remove('in');
            nums[0].classList.add('out');
            setTimeout(() => {
                nums[0].classList.remove('out');
                nums[1].classList.add('in');
                nums[1].classList.remove('out');
                setTimeout(() => {
                    nums[1].classList.remove('in');
                    nums[1].classList.add('out');
                    setTimeout(() => {
                        nums[1].classList.remove('out');
                        nums[2].classList.add('in');
                        nums[2].classList.remove('out');
                        setTimeout(() => {
                            nums[2].classList.remove('in');
                            nums[2].classList.add('out');
                            setTimeout(() => {
                                nums[2].classList.remove('out');
                                counter.style.display = 'none'
                                return resolve()
                            }, time * 2)
                        }, time * 2)
                    }, time * 2)
                }, time * 2)
            }, time * 2)
        }, time)
    });
}

export default runInitialCountDown