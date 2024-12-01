
const kgToPounds = 2.20462;


const kgInput = document.getElementById('kgInput');
const result = document.getElementById('result');


kgInput.addEventListener('input', () => {

    const kgValue = parseFloat(kgInput.value);

    if (!isNaN(kgValue)) {
        const pounds = (kgValue * kgToPounds).toFixed(2);
        result.textContent = `Фунти: ${pounds}`;
    }
});