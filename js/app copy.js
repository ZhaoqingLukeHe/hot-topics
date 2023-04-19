const container = document.getElementById('main-content');
const links = document.querySelectorAll('.nav-link');
let url = './partials/home.html';

const loadContent = (content) => {
    fetch(content)
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            container.innerHTML = data;
        })
        .catch((error) => {
            console.log('Error:', error);
        });
};

const selectContent = (event) => {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    loadContent(href);
};

loadContent(url);

links.forEach((link) => {
    link.addEventListener('click', selectContent);
});
