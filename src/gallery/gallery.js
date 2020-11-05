import html2canvas from 'html2canvas'

const gallery = []
const newGalleryEl = (audioBlob) => {
    return new Promise((resolve, reject) => {
        console.log(audioBlob);
        html2canvas(document.querySelector("#waveeditor")).then(canvas => {
            const new_div = document.createElement("div");
            new_div.innerHTML = `
            <div class="gallery__block">
                <button>Editar</button>
            </div>
        `;
            new_div.querySelector('.gallery__block').appendChild(canvas)
            document.querySelector('.gallery__container').appendChild(new_div)
            gallery.push[{
                blob: audioBlob,
                canvas: canvas
            }]
            resolve()
        });
    });
}

export { newGalleryEl }