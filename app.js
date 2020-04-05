const express = require('express');
const graphqlHTTP = require('express-graphql');
const userSchema = require('./schema/user');

const app = express();

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    userSchema,
    graphiql: true
}));

app.listen(7410, () => {
    console.log('now listening for requests on port 4000');
});