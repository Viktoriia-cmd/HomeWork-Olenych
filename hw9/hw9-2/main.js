
let arr = ['Main','Products','About us','Contacts']

    const nav = document.createElement('ul');
    nav.classList.add('nav');
for (const item of arr) {
    const li = document.createElement('li')
    li.innerText = item;
    nav.appendChild(li);
}

    document.body.appendChild(nav);



