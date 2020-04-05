const { buildSchema } = require('graphql');

var userSchema = buildSchema(`
type Query {
    user(id: String!): User
    allUsers: [User]
}

type User {
    id: String!,
    name: String,
    age: Int,
    country: Country
}

type Country {
    name: String!
}
`);

module.exports = userSchema;