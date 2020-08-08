import { Request, Response, request, response } from 'express';
import db from '../database/connection';


export default class ConnectionsController {
    
    // Método que exibe o total de conexões realizadas
    async index(request:Request, response: Response){
        const totalConnections = await db('connections').count('* as total');
        const { total } = totalConnections[0];
        
        return response.json( {total});

    }

    // Método que cria uma nova conexão
    async create(request:Request, response: Response){
        const { user_id } = request.body;

        await db('connections').insert({
            user_id,
        }) ;

        return response.status(201).send();

    }
}