function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
let clients = [];

clients.push(new Client(1, 'Ivan', 'Petrenko', 'ivan.petrenko@example.com', '+380501234567', ['Laptop', 'Mouse']));
clients.push(new Client(2, 'Olena', 'Shevchenko', 'olena.shevchenko@example.com', '+380671234567', ['Phone']));
clients.push(new Client(3, 'Petya', 'Koval', 'petya.koval@example.com', '+380931234567', ['Tablet', 'Keyboard']));
clients.push(new Client(4, 'Svitlana', 'Tkachenko', 'svitlana.tkachenko@example.com', '+380991234567', ['Monitor']));
clients.push(new Client(5, 'Andriy', 'Bondarenko', 'andriy.bondarenko@example.com', '+380661234567', ['Smartwatch', 'Headphones']));
clients.push(new Client(6, 'Oksana', 'Melnyk', 'oksana.melnyk@example.com', '+380731234567', ['Camera']));
clients.push(new Client(7, 'Kolya', 'Kravchenko', 'kolya.kravchenko@example.com', '+380671111111', ['Printer', 'Scanner']));
clients.push(new Client(8, 'Katya', 'Polishchuk', 'katya.polishchuk@example.com', '+380991111111', ['TV']));
clients.push(new Client(9, 'Volodymyr', 'Lysenko', 'volodymyr.lysenko@example.com', '+380931111111', ['Router', 'SSD']));
clients.push(new Client(10, 'Natalia', 'Danylenko', 'natalia.danylenko@example.com', '+380501111111', ['Microwave']));

console.table(clients);
