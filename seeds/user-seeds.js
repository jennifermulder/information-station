// what is the purpose of this file?
// populate the User table with dummy data
const { User } = require('../models');

const users = [
    {
        email:'chulopapi@example.com',
        password:'1234',
        username:'chulopapi'
    },
    {
        email:'neilddino@example.com',
        password:'1234',
        username:'neildino'
    },
];

function seedUsers() {
    User.bulkCreate(users);
}

module.exports = seedUsers();