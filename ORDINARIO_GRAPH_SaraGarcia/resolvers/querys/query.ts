import { GraphQLError } from "graphql"; //para poder lanzar errores
import { typeDefs } from "../../gql/schema.ts";
import { ContactDB } from "../../types.ts";
import ContactModelType from "../../db/schema/contact.ts";

import {getTelefono} from "../getTelefono.ts"
import {getCiudad} from "../getCiudad.ts"
import { getTiempo } from "../getTiempo.ts";


export const Query = {

    getContact: async (_: unknown, args: { id: string }) /*: Promise<ContactDB>*/ => {
    try {
        const contacto = await ContactModelType.findOne({_id: args.id}).exec();
        if (!contacto){
            throw new GraphQLError(`Contacto no encontrado con ${args.id}`)
            extension: {code: "NOT_FOUND"}
        }

        const countryJson = await getCiudad(contacto.pais)
        const ciudad = countryJson[0].capital
        
        console.log(ciudad)
        const worldtime = await getTiempo(ciudad)
        const tiempo_actual= worldtime.datetime

        console.log(tiempo_actual)


        return{
            nombre: contacto.nombre,
            telefono: contacto.telefono,
            pais:contacto.pais,
            hora_actual: tiempo_actual
        }

    }catch(error){
      console.log(error);
      return error;
    }

  },

  getContacts: async () : Promise<ContactDB[]> => {
    try {
        const contactoModel = await ContactModelType.find().exec()


        const contactos: ContactDB[] = contactoModel.map(async (contacto) => {
            
            const countryJson = await getCiudad(contacto.pais)
            const ciudad = countryJson[0].capital
            
            const worldtime = await getTiempo(ciudad)
            const tiempo_actual= worldtime.datetime

        console.log(tiempo_actual)
            
            return{
            nombre: contacto.nombre,
            telefono: contacto.telefono,
            pais:contacto.pais,
            hora_actual: tiempo_actual
            }
        })

        return contactos;


    }catch(error){
      console.log(error);
      return error;
    }

  },

 
};