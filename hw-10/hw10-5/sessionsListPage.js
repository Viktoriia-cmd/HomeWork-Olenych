const sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
const sessionsListContainer = document.getElementById('sessionsList');
if (sessionsList.length > 0) {
    sessionsList.forEach(session => {
        const listItem = document.createElement('li');
        listItem.textContent = `Відвідування: ${new Date(session).toLocaleString()}`;
        sessionsListContainer.appendChild(listItem);
    });
} else {
    const messageItem = document.createElement('li');
    messageItem.textContent = "Ще немає відвідувань.";
    sessionsListContainer.appendChild(messageItem);
}