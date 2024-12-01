const items = Array.from({ length: 100 }, (_, i) => ({ id: i + 1, name: `Object ${i + 1}` }));

const objectsContainer = document.getElementById('objectsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');


const itemsPerPage = 10;
let currentPage = 1;

function renderObjects(page) {

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const visibleItems = items.slice(startIndex, endIndex);


    objectsContainer.innerHTML = '';
    visibleItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'object';
        div.textContent = `${item.name}`;
        objectsContainer.appendChild(div);
    });


    prevBtn.disabled = page === 1;
    nextBtn.disabled = endIndex >= items.length;
}


prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderObjects(currentPage);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage * itemsPerPage < items.length) {
        currentPage++;
        renderObjects(currentPage);
    }
});


renderObjects(currentPage);