
import mongoose from "mongoose";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//IMPORTS
import { typeDefs } from "./gql/schema.ts";


//import { resolvers } from "./gql/resolvers.ts";
import { Query } from "./resolvers/querys/query.ts";
import {Mutation } from "./resolvers/mutations/mutation.ts"

//-----------------------------



//------------------------------

import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts"; //Leer variables de entorno

const env = await load(); //Carga Variables de entorno


//--------------
//borrar la primera
const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL"); //Variable del sistema operativo
const PORT = env.PORT || Deno.env.get("PORT") || 3060; //Variable del sistema operativo
//------------



if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(1);
}

try{
  await mongoose.connect(MONGO_URL);
  console.info("Mongo Connected");
}catch(e){
  console.error(e);
}


const server = new ApolloServer({
  resolvers: {Query, Mutation},
  typeDefs: typeDefs,
});

const { url } = await startStandaloneServer(server,{
  listen: {
    port: PORT,
  }
});

console.log(`🚀 Server ready at ${url}`);


