// const multiply = (x, y) => x * y;
// const square = (x) => multiply(x, x);
// const isRightTriangle = (a, b, c) => {
//   return square(a) + square(b) === square(c);
// }

// const delayedColorChange = (newColor, delay) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = newColor;
//       resolve();
//     }, delay);
//   });
// }

// delayedColorChange('red', 1000)
//   .then(() => delayedColorChange('orange', 1000))
//   .then(() => delayedColorChange('yellow', 1000))
//   .then(() => delayedColorChange('green', 1000))
//   .then(() => delayedColorChange('blue', 1000))
//   .then(() => delayedColorChange('indigo', 1000))
//   .then(() => delayedColorChange('violet', 1000))
//   .then(() => delayedColorChange('white', 1000));

// searchMoviesAPI('amadeus', () => {
//   saveToMyDB(movies () => {
//     //if it works, run this:
//   }, () => {
//     //if it doesn't work, run this:     
//   })
// } )

// PROMISES TO AVOID CALLBACK HELL
// const fakeRequestCallback = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 3000) {
//       failure('Connection Timeout :(');
//     } else {
//       success(`Here is your fake data from ${url}`);
//     }
//   }, delay)
// }

// fakeRequestCallback('google.com', function() {
//   console.log('It worked!!!!')
//   }, function() {
//     console.log('ERROR!!!!');
// });


// const fakeRequest = (url) => {
//   console.log(`Requesting URL: ${url}`);
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();
//     setTimeout(() => {
//       if (rand < 0.7) {
//         resolve('YOUR FAKE DATA HERE');
//       }
//       reject('Request Error');
//     }, 1000)
//   })
// }

// fakeRequest('yelp.com')
//   .then((data) => {
//     console.log('Request Complete')
//     console.log('Data is:', data)
//   })
//   .catch((err) => {console.log('Request Failed', err)})

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay)
  })
}

delayedColorChange('red', 1000)
  .then(() => delayedColorChange('orange', 1000))
  .then(() => delayedColorChange('yellow', 1000))
  .then(() => delayedColorChange('green', 1000))
  .then(() => delayedColorChange('blue', 1000))
  .then(() => delayedColorChange('indigo', 1000))
  .then(() => delayedColorChange('violet', 1000))
  .then(() => delayedColorChange('white', 1000))