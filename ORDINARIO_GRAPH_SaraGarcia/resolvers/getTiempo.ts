import { GraphQLError } from "graphql";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
const env = await load();

export const getTiempo = async (ciudad: string) => {
    const API_KEY = env.API_KEY || Deno.env.get("API_KEY") || "/wVeUzQpA/tfl2AodcdA8w==ffyAsXAdBI0jvVyp"
    const url = `https://api.api-ninjas.com/v1/worldtime?city=${ciudad}`
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