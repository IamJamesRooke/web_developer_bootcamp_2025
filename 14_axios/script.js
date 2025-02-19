document.addEventListener('DOMContentLoaded', () => {
    axios.get('https://swapi.tech/api/people/1/')
        .then(response => {
            console.log('Data:', response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});