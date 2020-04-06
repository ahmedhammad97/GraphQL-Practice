const { buildSchema } = require('graphql');

var userSchema = buildSchema(`
type Query {
    user(id: String!): User
    allUsers: [User]
}

type Mutation {
    createUser(
        id: Int!,
        name: String,
        age: Int,
        country: Boolean
    ): String
    
    createCountry(name: String!) : String
}

type User {
    id: Int!,
    name: String,
    age: Int,
    country: Country
}

type Country {
    name: String!
}
`);

module.exports = userSchema;