import { GraphQLError } from "graphql"; //para poder lanzar errores
import { typeDefs } from "../../gql/schema.ts";
import { Example } from "../../types.ts";


export const Query = {

    getExample: async (/*_: unknown, args: { id: string }*/) /*: Promise<Example>*/ => {
    try {
        

    }catch(error){
      console.log(error);
      return error;
    }

  },

 
};