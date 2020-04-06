const mockedUsers = require('../data/users');

let countryOnHold = null;

module.exports = {
    user: ({ id }) => {
        return mockedUsers[id];
    },
    allUsers: () => {
        return mockedUsers;
    },
    createUser: (id, name, age, country) => {
        let user = {
            id: id,
            name: name,
            age: age,
        }
        country ? user.country = countryOnHold : user.country = null;
        mockedUsers.push(user);
        console.log(mockedUsers);
        return "Success";
    },
    createCountry: (name) => {
        countryOnHold = name;
        return "Success";
    }
};

// This doesn't work!

// The return value of graphql should be de-structured
// and wrapped in a class object maybe.

// For your bad luck, I am too lazy to do this, but we
// got the idea behind it.