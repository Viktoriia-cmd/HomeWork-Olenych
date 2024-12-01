let counter = localStorage.getItem('pageCounter') || 0;
counter++;
localStorage.setItem('pageCounter', counter);
document.getElementById('counter').innerText = counter;
