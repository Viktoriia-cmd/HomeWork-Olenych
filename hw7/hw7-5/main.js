function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clients = [];
clients.push (
    new Client (1, 'sasha', 'shevchenko', 'shevchenko@gmail.com', '+380992542617', ['camera', 'lens', 'tripod']),
    new Client(2, 'sasha', 'kalugin',  'kalugin@gmail.com', '+80507771173', ['fridge']),
    new Client(3, 'kolya', 'kalugin',  'kalugin@gmail.com', '+80507771175', ['pants', 't-shirt']),
    new Client(4,  'olya', 'amelina',  'amelina@gmail.com', '+80507771178', ['swimsuit', 'sunglasses']),
    new Client(5,  'max', 'cyrkin',  'cyrkin@gmail.com', '+80507771171', ['camera', 'lens']),
    new Client(6,  'anya', 'zolotoreva',  'zolotoreva@gmail.com', '+80504771177', ['dress', 'shoes', 'underwear']),
    new Client(7,  'oleg',  'hmelnicki',  'hmelnicki@gmail.com', '+80507571177', ['tablet']),
    new Client(8,  'andrey', 'shevchenko',  'shevchenko@gmail.com', '+80506771177', ['tv']),
    new Client(9,  'masha', 'timoshenko',  'timoshenko@gmail.com', '+80507781177', ['face cream', 'shampoo', 'hair mask', 'hand cream', 'face mask']),
    new Client(10,  'max',  'mackron',  'mackron@gmail.com', '+80507771977', ['dishwasher'])
);

function sortClients(clients) {
    return clients.sort((a, b) => a.order.length-b.order.length);
}

console.log(sortClients(clients));


