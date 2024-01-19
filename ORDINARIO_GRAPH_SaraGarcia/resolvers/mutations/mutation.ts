import mongoose from "npm:mongoose@8.0.0";
import { GraphQLError } from "graphql";

import { Example } from "../../types.ts";


export const Mutation = {
   
    addExample: async (_:unknown, args: {name: string, email: string}) => {
        try{
            

        }catch(error){
            return error.message;
        }
        
    },

}