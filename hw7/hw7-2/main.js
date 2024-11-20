function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = []
users.push (
    new User(1,  'vasya',  'astahov',  'astahkov@gmail.com', '+80507771177'),
    new User(2, 'sasha', 'kalugin',  'kalugin@gmail.com', '+80507771173'),
    new User(3, 'kolya', 'kalugin',  'kalugin@gmail.com', '+80507771175'),
    new User(4,  'olya', 'amelina',  'amelina@gmail.com', '+80507771178'),
    new User(5,  'max', 'cyrkin',  'cyrkin@gmail.com', '+80507771171'),
    new User(6,  'anya', 'zolotoreva',  'zolotoreva@gmail.com', '+80504771177'),
    new User(7,  'oleg',  'hmelnicki',  'hmelnicki@gmail.com', '+80507571177'),
    new User(8,  'andrey', 'shevchenko',  'shevchenko@gmail.com', '+80506771177'),
    new User(9,  'masha', 'timoshenko',  'timoshenko@gmail.com', '+80507781177'),
    new User(10,  'max',  'mackron',  'mackron@gmail.com', '+80507771977')
);

let filter = users.filter (value => value.id % 2 === 0)
    console.log(filter);