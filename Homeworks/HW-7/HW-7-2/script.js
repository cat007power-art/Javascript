function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User(1, 'Ivan', 'Petrenko', 'ivan.petrenko@example.com', '+380501234567'),
    new User(2, 'Olena', 'Shevchenko', 'olena.shevchenko@example.com', '+380671234567'),
    new User(3, 'Petya', 'Koval', 'petya.koval@example.com', '+380931234567'),
    new User(4, 'Svitlana', 'Tkachenko', 'svitlana.tkachenko@example.com', '+380991234567'),
    new User(5, 'Andriy', 'Bondarenko', 'andriy.bondarenko@example.com', '+380661234567'),
    new User(6, 'Oksana', 'Melnyk', 'oksana.melnyk@example.com', '+380731234567'),
    new User(7, 'Kolya', 'Kravchenko', 'kolya.kravchenko@example.com', '+380671111111'),
    new User(8, 'Katya', 'Polishchuk', 'katya.polishchuk@example.com', '+380991111111'),
    new User(9, 'Volodymyr', 'Lysenko', 'volodymyr.lysenko@example.com', '+380931111111'),
    new User(10, 'Natalia', 'Danylenko', 'natalia.danylenko@example.com', '+380501111111')
];
let evenUsers = users.filter(user => user.id % 2 === 0);

console.log(users);
console.log(evenUsers);