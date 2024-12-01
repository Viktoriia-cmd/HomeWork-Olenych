const ageInput = document.getElementById('ageInput');
const AgeButton = document.getElementById('AgeButton');
const messageDiv = document.getElementById('message');

AgeButton.addEventListener('click', () => {
    const age = parseInt(ageInput.value);
    if (age < 18) {
        messageDiv.textContent = 'Вам менше 18 років. Доступ заборонено.';

    } else {
        messageDiv.textContent = 'Ваш вік підходить. Ласкаво просимо!';
    }
});