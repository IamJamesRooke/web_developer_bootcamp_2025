const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log('You clicked me!');
    console.log('I hope it worked!');
}

function scream() {
    console.log('AAAAHHHH');
    console.log('STOP TOUCHING ME!');
}

btn.onmouseenter = scream;

document.querySelector('h1').onmouseenter = function() {
    console.log('Passing over h1');
}

document.querySelector('h1').onmouseleave = function() {
    console.log('Leaving h1');
}

document.querySelector('h1').onmousemove = function() {
    console.log('Movement within h1');
}

const btn3 = document.querySelector('#v3');
btn3.addEventListener('mouseup', function() {
    alert('Clicked!');
});

function twist() {
    console.log('Twist');
}

function shout() {
    console.log('Shout');
}

const tasButton = document.querySelector('#tas');

tasButton.onclick = () => {
    twist();
    shout();
}