const userForm = document.forms.userForm;
const message = document.getElementById('message');

userForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const name = userForm.name.value.trim();
    const surname = userForm.surname.value.trim();
    const age = userForm.age.value.trim();

    const user = {name, surname, age};
    console.log(user);

    message.innerText = `Ім'я: ${user.name}, Прізвище: ${user.surname}, Вік: ${user.age}`
});