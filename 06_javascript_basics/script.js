const person = {
    firstName: 'James', 
    lastName: 'Rooke'
};

document.getElementById('firstName').textContent = person.firstName;
document.getElementById('lastName').textContent = person.lastName;

for (let i = 1; i <= 3; i++) {
    console.log(i);
        for (let j = 1; j <= 3; j++) {
            console.log(`This number is ${j}.`);
        }
}

let count = 5;
while (count > 0) {
    document.getElementById('textOutput').textContent = count;
    count--;
}

const subreddits = ['soccer', 'popheads', 'cringe', 'books'];
for (let sub of subreddits) {
    console.log(`reddit.com/r/${sub}`);
}

const movieReviews = {
    Arrival: 9.5,
    Alien: 9,
    Amelie: 8,
    'In Bruges': 9,
    Amadeus: 10
};

for (let movie in movieReviews) {
    console.log(movie, movieReviews[movie]);
}