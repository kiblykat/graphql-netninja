import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// server setup using ApolloServer - takes an object with 2 properties
const server = new ApolloServer({
  //typeDefs: descriptions of datatypes and relationships with other datatypes (make own Schema)
  //resolvers: define how to respond to queries for different data on the graph
});

// server startup using startStandaloneServer
const { url } = startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server read at port", 4000);
