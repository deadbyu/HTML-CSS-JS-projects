const btn = document.querySelector('.Btn');
const imageContainer = document.querySelector('.image-container');

btn.addEventListener('click', () => {
    createImg();
})



function createImg(){
    const newImgEL = document.createElement('img');
    newImgEL.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
    imageContainer.appendChild(newImgEL);
}