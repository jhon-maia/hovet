import { prismaClient } from "../../../database/client";
import { EntradaCreate, IEntradaRepository } from "./IEntradaRepository";

export class EntradaPrismaRepository implements IEntradaRepository {

    async save({tipo,quantidade,data,produtoId}: EntradaCreate): Promise<EntradaCreate > {
        

        const entrada= await prismaClient.entrada.create({data:{
            tipo,
            quantidade,
            data,
            produtoId
            
        }, include:{
            produto:true
        }})

        const entradaSave:EntradaCreate={
            id:entrada.id,
            tipo:entrada.tipo,
            quantidade:entrada.quantidade,
            data:entrada.data,
            produtoId:entrada.produtoId
            

        } 

        return entradaSave;

    }


    async findById(id: string): Promise<EntradaCreate | undefined> {

        const entrada= await  prismaClient.entrada.findFirst({
            where:{
            id
        }})
        
      const entradaFound=new Object (entrada);
      return entradaFound as EntradaCreate;
    } 
}