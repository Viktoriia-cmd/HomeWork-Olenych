let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const courses = document.createElement('section');
courses.classList.add('courses');
for (const item of coursesAndDurationArray) {
    const div = document.createElement('div')
    div.innerText = `${item.title} ${item.monthDuration}`;
    courses.appendChild(div);
}

document.body.appendChild(courses);