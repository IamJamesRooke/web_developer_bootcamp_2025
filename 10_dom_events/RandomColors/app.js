// Elements
const button = document.querySelector('button');
const h1 = document.querySelector('h1');

// Functions
const genRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Event Listeners
button.addEventListener('click', () => {
    const newColor = genRandomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
});

