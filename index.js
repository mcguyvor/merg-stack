const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolver');
const { MONGODB } = require('./config')

const server = new ApolloServer({
    typeDefs,
    resolvers
});
//connect with db before starting the server
mongoose.connect( MONGODB, {useNewUrlParser: true})
.then(async () => {
    console.log('Mongo db connect success')
    return await server.listen({ port: 5001})
    .then(res => {
        console.log(`Server running at ${res.url}`);
    });
})


