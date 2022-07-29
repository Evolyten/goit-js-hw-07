import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')
const galleryMarkup = createGalleryList(galleryItems)

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup)
galleryEl.addEventListener('click', onClick)

function createGalleryList(gallery) {
    return (gallery.map((img) => `<a class='gallery__link' href='${img.original}'><img class='gallery__image' src='${img.preview}' alt='${img.description}' data-source='${img.original}'></a>`).join(""))
}

function onClick(e) {
    e.preventDefault()
    if (e.target.nodeName !== 'IMG')
    {
        return
    }
    createModal(e)
   
}

let instance = 0;
const options ={
	
	closable: true,
	
	className: '',
	
	onShow: (instance) => {document.addEventListener('keydown',modalCloseBySpace)},
	
	onClose: (instance) => {document.removeEventListener('keydown',modalCloseBySpace )}
}

function createModal(event) {
    instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" >`,options)
    instance.show() 
    const visible = instance.visible()
    
}


function modalCloseBySpace(event) {
      event.preventDefault(); 
        if (event.key === " ") {
        instance.close()}
}