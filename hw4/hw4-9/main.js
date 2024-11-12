function foobar(users) {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);

    }
}
    foobar([
        {id:1,name:`Nik`,age:39},
        {id:2,name:`Nik`,age:39},
        {id:3,name:`Nik`,age:39},
        {id:4,name:`Nik`,age:39},
        {id:5,name:`Nik`,age:39},
        {id:6,name:`Nik`,age:39},
        {id:7,name:`Nik`,age:39},

    ])
