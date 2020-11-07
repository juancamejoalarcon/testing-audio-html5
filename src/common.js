const hide = (el) => {
    el.style.display = 'none'
}

const show = (el) => {
    el.style.display = 'block'
}

const createShadowDom = (container, el, mainCss) => {
    var root = document.querySelector('#' + container).attachShadow( { mode: "open" } )
    let style = document.createElement('style');
    style.textContent = mainCss;
    root.appendChild( style )
    root.appendChild( el )
}

export { hide, show, createShadowDom }