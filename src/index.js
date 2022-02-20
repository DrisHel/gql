const { ApolloServer , gql } = require('apollo-server');

//toda request é POST
// toda request bate no mesmo endpoint (/graphql)

// Query -> obter informações (GET)
//Mutation -> Manipular dados (POST,PUT,DELETE)
//Scalar types -> String, Int,Boolean, Float e ID

const typeDefs = gql `

type User{
    _id: ID
    name: String!
    email: String!
    active: Boolean!
}

type Post{
    _id:ID!
    title:String!
    content:String!
    author:User!
}

type Query{
    hello: String
    users:[User]!
    getUserByEmail(email: String!):User!
}
`;

const  users =[
    {_id: String(Math.random()), name:'Doris', email:'doris@teste.com', active:true},
    {_id: String(Math.random()), name:'Debora', email:'debora@teste.com', active:false},
    {_id: String(Math.random()), name:'Josue', email:'josue@teste.com', active:true},
];
const resolvers = {
    Query: {
        hello:() => 'Hello Word!',
       
    }
};

const server = new ApolloServer({ typeDefs, resolvers});
server.listen().then(({ url }) => console.log(`Server started at ${url}`));

