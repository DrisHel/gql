import { ApolloServer } from 'apollo-server';
import mysql2 from 'mysql2';

function startServer({ typeDefs, resolvers}){
    const server = new ApolloServer({ typeDefs, resolvers});
    server.listen().then(({url}) => console.log(`server started at ${url}`));
}

export default startServer;