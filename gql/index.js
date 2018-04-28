const { readFileSync } = require('fs');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = readFileSync('./gql/types.graphql', 'utf-8');
const resolvers = require('./resolvers');

const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = schema;
