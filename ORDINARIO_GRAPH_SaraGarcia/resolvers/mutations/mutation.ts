import mongoose from "npm:mongoose@8.0.0";
import { GraphQLError } from "graphql";

import { ContactDB } from "../../types.ts";
import ContactModelType from "../../db/schema/contact.ts";
import { getTelefono } from "../getTelefono.ts";

export const Mutation = {
   
    addContact: async (_:unknown, args: {nombre: string, telefono: string}) => {
        try{
            const validateTlf = await getTelefono(args.telefono)
            const pais:string = validateTlf.country
            console.log("hola")
            console.log(pais)
            
            const newContact = new ContactModelType({ nombre: args.nombre, telefono: args.telefono, pais: pais })
            await newContact.save();

            return {
                nombre: newContact.nombre,
                telefono: newContact.telefono,
                pais: newContact.pais,
            }


        }catch(error){
            return error.message;
        }
        
    },

    deleteContact: async (_: unknown, args: { id: string }): Promise<Boolean>=> {
        try{
           const contacto = await ContactModelType.findOne({_id: args.id}).exec();

           if(!contacto){
            return false
            
           }

           await ContactModelType.findOneAndDelete({_id: args.id}).exec();
           return true

        }catch(error){
            return error.message;
        }
        
    },

    updateContact: async (_:unknown, args: {id:string, nombre: string, telefono: string}) => {
        try{
            
            const contacto = await ContactModelType.findOne({_id: args.id}).exec();
            if (!contacto){
                throw new GraphQLError(`Contacto no encontrado con ${args.id}`)
                extension: {code: "NOT_FOUND"}
            }

            const validateTlf = await getTelefono(args.telefono)
            const pais:string = validateTlf.country

            const updateContacto = await ContactModelType.findByIdAndUpdate(
                {_id: args.id},
                {
                    nombre: args.nombre,
                    telefono: args.telefono,
                    pais: pais
                },
                {new: true}

            ).exec()

            return updateContacto

        }catch(error){
            return error.message;
        }
        
    },

}