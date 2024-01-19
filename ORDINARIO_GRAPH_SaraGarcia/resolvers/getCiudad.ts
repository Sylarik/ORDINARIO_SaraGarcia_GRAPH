import { GraphQLError } from "graphql";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const env = await load();

export const getCiudad = async (pais: string) => {
    const API_KEY = env.API_KEY || Deno.env.get("API_KEY")
    const url = `https://api.api-ninjas.com/v1/country?name=${pais}`
    const headers = {'X-Api-Key': API_KEY}

    try{
        const response = await fetch(url, {headers});
        if(!response.ok){
            throw new GraphQLError('Error: ...')
        }
        const data = await response.json();
        return data;
    }catch(error){
        throw new GraphQLError('Error: ...')
    }
}
