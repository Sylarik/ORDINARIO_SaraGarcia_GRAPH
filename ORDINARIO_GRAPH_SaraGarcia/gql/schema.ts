//tal cual lo que diga el profe
//typeDefs

export const typeDefs = `#graphql
    
    type Example{
        id: ID!
    }
    
    type Query { # Endpoints
        getExample: [Example!]!
    }
   
    type Mutation { # Endpoints
            addExample(name: String!): Example!
        }
    
`;


 