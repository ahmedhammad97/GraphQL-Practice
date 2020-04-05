const express = require('express');
const graphqlHTTP = require('express-graphql');
const userSchema = require('./schema/user');
const userQuery = require('./query/userQuery');

const app = express();


app.use('/graphql', graphqlHTTP({
    userSchema,
    rootValue: userQuery,
    graphiql: true
}));

app.listen(7410, () => {
    console.log('now listening for requests on port 4000');
});