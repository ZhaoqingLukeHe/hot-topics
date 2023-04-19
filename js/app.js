const container = document.getElementById('main-content');
const links = document.querySelectorAll('.nav-link');
let url = './partials/home.html';

const loadContent = async (content) => {
    try {
        const response = await fetch(content);
        const data = await response.text();
        container.innerHTML = data;
    } catch (error) {
        console.log('Error:', error);
    }
};

const selectContent = async (event) => {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    await loadContent(href);
};

loadContent(url);

links.forEach((link) => {
    link.addEventListener('click', selectContent);
});
