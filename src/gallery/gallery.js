// import html2canvas from 'html2canvas'
import domtoimage from 'dom-to-image';

const gallery = []
// const newGalleryEl = (audioBlob) => {
//     return new Promise((resolve, reject) => {
//         console.log(audioBlob);
//         const element = document.querySelector('#' + window.soundSounerId).shadowRoot.querySelector("#waveeditor")
//         document.body.appendChild(element)
//         html2canvas(element).then(canvas => {
//             document.body.removeChild(element)
//             const new_div = document.createElement("div");
//             new_div.innerHTML = `
//             <div class="gallery__block">
//                 <button>Editar</button>
//             </div>
//         `;
//             new_div.querySelector('.gallery__block').appendChild(canvas)
//             document.querySelector('#' + window.soundSounerId).shadowRoot.querySelector('.gallery__container').appendChild(new_div)
//             gallery.push[{
//                 blob: audioBlob,
//                 canvas: canvas
//             }]
//             resolve()
//         });
//     });
// }
const newGalleryEl = (audioBlob) => {
    return new Promise((resolve, reject) => {
        domtoimage.toPng(document.querySelector('#' + window.soundSounerId).shadowRoot.querySelector("#waveeditor"))
        .then( (dataUrl) => {
            const new_div = document.createElement("div");
            new_div.innerHTML = `
            <div class="gallery__block">
                <button>Editar</button>
            </div>`
            var img = new Image();
            img.src = dataUrl;
            new_div.querySelector('.gallery__block').appendChild(img)
            document.querySelector('#' + window.soundSounerId).shadowRoot.querySelector('.gallery__container').appendChild(new_div)
            gallery.push[{
                blob: audioBlob,
                img: img
            }]
            resolve()
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
    });
}

export { newGalleryEl }