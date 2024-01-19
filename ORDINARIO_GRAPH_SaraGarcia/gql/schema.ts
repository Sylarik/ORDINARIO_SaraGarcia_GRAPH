//tal cual lo que diga el profe
//typeDefs

export const typeDefs = `#graphql
    
    type ContactDB{
        id: ID!
        nombre: String!
        telefono: String!
        pais: String!
        hora_actual: String!
    }
    
    type Query { # Endpoints
        getContact(id: ID!): ContactDB!
        getContacts: [ContactDB!]
    }
   
    type Mutation { # Endpoints
        addContact(nombre: String!, telefono: String!): ContactDB
        deleteContact(id: ID!): Boolean
        updateContact(id:ID!, nombre:String, telefono:String): ContactDB


    }
    
`;


 