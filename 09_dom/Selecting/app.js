// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     console.log(img.src);
// }

// const squareImages = document.getElementsByClassName('square');
// for (let img of squareImages) {
//     console.log(img.src);
// }

// document.querySelector('p'); // gets the first p tag

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href);
}