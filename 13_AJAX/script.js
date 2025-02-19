const dog = {
    breed: 'lab',
    color: 'black',
    isGoodBoy: true,
}

// // One way to do an AJAX request
// const req = new XMLHttpRequest();

// req.onload = function() {
//     console.log('Loaded');
//     const data = JSON.parse(this.responseText);
//     console.log(data.name);
// };

// req.onerror = function() {
//     console.log('Error');
//     console.log(this);
// };

// req.open('GET', 'https://swapi.dev/api/people/1/', true);
// req.send();

// fetch("https://swapi.tech/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.result.properties);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });
 
// fetch("https://swapi.tech/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.result.properties);
//     return fetch("https://swapi.tech/api/people/2/");
//   })
//   .then((res) => {
//     console.log("SECOND REQUEST RESOLVED!!!");
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.result.properties);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });
 
// const loadStarWarsPeople = async () => {
//   try {
//     const res = await fetch("https://swapi.tech/api/people/1/");
//     const data = await res.json();
//     console.log(data.result.properties);
//     const res2 = await fetch("https://swapi.tech/api/people/2/");
//     const data2 = await res2.json();
//     console.log(data.result.properties);
//   } catch (e) {
//     console.log("ERROR!!!", e);
//   }
// };
 
// loadStarWarsPeople();

// // axios
// //   .get("https://swapi.tech/api/people/1/")
// //   .then((res) => {
// //     console.log("RESPONSE: ", res);
// //   })
// //   .catch((e) => {
// //     console.log("ERROR! ", e);
// //   });
 
// const getStarWarsPerson = async (id) => {
//     try {
//       const res = await axios.get(`https://swapi.tech/api/people/${id}/`);
//       console.log(res.data.result.properties);
//     } catch (e) {
//       console.log("ERROR", e);
//     }
//   };
   
//   getStarWarsPerson(5);
//   getStarWarsPerson(10);


// fetch("https://swapi.tech/api/people/1/")
// .then((res) => {
//     console.log('RESOLVED', res);
//     return res.json()
// })
// .then((data) => {
//     console.log(data);
//     return fetch("https://swapi.tech/api/people/2/")
// })
// .catch((err) => {
//     console.log('ERROR', err);
// })

const loadStarWarsPeople = async () => {
    const res = await fetch("https://swapi.tech/api/people/1/");
    const data = await res.json();
    console.log(data);
};

loadStarWarsPeople();