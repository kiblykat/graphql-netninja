export const typeDefs = `#graphql
 type Game {
  id: ID!
  title: String!
  platform: [String!]!
 }

 type Review {
  id: ID!
  rating: Int!
  content: String!
 }
 
 type Author {
  id: ID!
  name: String!
  verified: Boolean!
 }

 type Query {
  reviews: [Review]
  review(id:ID!): Review
  games: [Game]
  game(id:ID!): Game
  authors: [Author]
  author(id:ID!): Author
 }
`;
// 5 types: Int, Float, String, Boolean, ID
// Query: gatekeeps the entrypoint into the graph, prevent user from entering from anywhere
