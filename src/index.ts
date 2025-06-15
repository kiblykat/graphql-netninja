import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./_db.js";

// define resolver functions defined in the root Query type
const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
  },
};

// server setup using ApolloServer - takes an object with 2 properties
const server = new ApolloServer({
  //typeDefs: descriptions of datatypes and relationships with other datatypes (make own Schema)
  typeDefs,
  //resolvers: define how to respond to queries for different data on the graph
  resolvers,
});

// server startup using startStandaloneServer
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log("Server read at port", 4000);
