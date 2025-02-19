// document.addEventListener('DOMContentLoaded', () => {
//     
//     if (!form) {
//         console.error('Form element not found.');
//         return;
//     }
//     form.addEventListener('submit', function (e) {
//         e.preventDefault();
//         const searchTerm = form.querySelector('input[name="query"]').value;
//         console.log(searchTerm);
//     });
// });

const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm  = form.elements.query.value;
    const config = {params: {q: searchTerm}};
    const res =  await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    form.elements.query.value = '';
});

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}