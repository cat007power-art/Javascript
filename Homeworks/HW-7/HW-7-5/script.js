function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clients = [
    new Client(1, 'Ivan', 'Petrenko', 'ivan.petrenko@example.com', '+380501234567', ['Laptop', 'Mouse']),
    new Client(2, 'Olena', 'Shevchenko', 'olena.shevchenko@example.com', '+380671234567', ['Phone']),
    new Client(3, 'Petya', 'Koval', 'petya.koval@example.com', '+380931234567', ['Tablet', 'Keyboard']),
    new Client(4, 'Svitlana', 'Tkachenko', 'svitlana.tkachenko@example.com', '+380991234567', ['Monitor']),
    new Client(5, 'Andriy', 'Bondarenko', 'andriy.bondarenko@example.com', '+380661234567', ['Smartwatch', 'Headphones']),
    new Client(6, 'Oksana', 'Melnyk', 'oksana.melnyk@example.com', '+380731234567', ['Camera']),
    new Client(7, 'Kolya', 'Kravchenko', 'kolya.kravchenko@example.com', '+380671111111', ['Printer', 'Scanner']),
    new Client(8, 'Katya', 'Polishchuk', 'katya.polishchuk@example.com', '+380991111111', ['TV']),
    new Client(9, 'Volodymyr', 'Lysenko', 'volodymyr.lysenko@example.com', '+380931111111', ['Router', 'SSD']),
    new Client(10, 'Natalia', 'Danylenko', 'natalia.danylenko@example.com', '+380501111111', ['Microwave'])
];
clients.sort((a, b) => a.order.length - b.order.length);
console.table(clients);