const express = require('express');
const graphqlHTTP = require('express-graphql');
const userSchema = require('./schema/userSchema');
const userQuery = require('./query/userQuery');

const app = express();


app.use('/graphql', graphqlHTTP({
    schema: userSchema,
    rootValue: userQuery,
    graphiql: true
}));

app.listen(7410, () => {
    console.log('Listening for requests on port 7410');
});