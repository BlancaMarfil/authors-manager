import * as functions from "firebase-functions";
const express = require("express");
import { ApolloServer } from "@apollo/server";
import { resolvers } from "../graphql/resolvers/index";
import { typeDefs } from "../graphql/schema/index";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from "@apollo/server/express4";
import http from "http";
import cors from "cors";

const app = express();

// const server = new ApolloServer({ typeDefs, resolvers });

const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

// server.start().then((_: any) => {server.applyMiddleware({ app, path: "/", cors: true })});

server.start().then((_: any) => {
  app.use(
    "/graphql",
    cors<cors.CorsRequest>({
      origin: ["https://studio.apollographql.com"],
    }),
    express.json(),
    expressMiddleware(server)
  );
});

//   await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
//   console.log(`🚀 Server ready at http://localhost:4000/graphql`);

/* Change the region as you want */
export const graphql = functions.https.onRequest(app);
