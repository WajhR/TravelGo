const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = { typeDefs, resolvers };





// const messagesResolvers = require('./message');
// const usersResolvers = require('./users')
// module.exports = {
//     Query: {
//         ...messagesResolvers.Query,
//         ...usersResolvers.Query
//     },
//     Mutation: {
//         ...messagesResolvers.Mutation,
//         ...usersResolvers.Mutation

//     },
// };