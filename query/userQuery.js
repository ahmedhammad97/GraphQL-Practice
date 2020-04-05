const mockedUsers = require('../data/users');

module.exports = {
    user: ({ id }) => {
        return mockedUsers[id];
    },
    allUsers: () => {
        return mockedUsers;
    }
};