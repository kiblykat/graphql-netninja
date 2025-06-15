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
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
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
