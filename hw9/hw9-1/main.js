const p = document.createElement('p');

p.classList.add('wrap');
p.classList.add('collapse');
p.classList.add('alpha')
p.classList.add('beta');

p.innerText = `Lorem Ipsum is simply dummy text of the`

document.body.appendChild(p);

const copy = p.cloneNode(true);

document.body.appendChild(copy);


