import { prismaClient } from '../../../database/client';
import { ILoteRepository, LoteCreate } from './ILoteRepository';


export class LotePrismaRepository implements ILoteRepository {

    async findAll(): Promise<LoteCreate[]> {
        const lote = await prismaClient.lote.findMany()

        return lote as LoteCreate[]

    }

    async delete(id: string): Promise<null> {
        const lote = await prismaClient.lote.delete({
            where: {
                id
            }
        })

        return null;
    }
   async  update(id: string, { numero,fabricante,dataFabricacaco,dataValidade}: LoteCreate): Promise<LoteCreate | undefined> {

    const lote = await prismaClient.lote.update(
        {
            where:{

               id:id
            },
             data: {
               
                numero,
                fabricante,
                dataValidade,
                dataFabricacaco
                
            }
        })

        const loteUpdate: LoteCreate = {
            id:lote.id,
            numero:lote.numero,
            fabricante:lote.fabricante,
            dataValidade:new Date(lote.dataValidade),
            dataFabricacaco:new Date(lote.dataFabricacaco)

        }
     
        return loteUpdate
        
    }


    async save({numero,fabricante,dataFabricacaco,dataValidade}: LoteCreate): Promise<LoteCreate | undefined> {
        

        const lote= await prismaClient.lote.create({data:{
            numero,
            fabricante,
            dataValidade,
            dataFabricacaco
            
        }})

        const loteSave:LoteCreate={
            id:lote.id,
            numero:lote.numero,
            fabricante:lote.fabricante,
            dataValidade:new Date(lote.dataValidade),
            dataFabricacaco:new Date(lote.dataFabricacaco)

        } 

        return loteSave;

    }


    async findById(id: string): Promise<LoteCreate | undefined> {

        const lote= await  prismaClient.lote.findFirst({
            where:{
            id
        }})
        
      const loteFound=new Object(lote);
      return loteFound as LoteCreate;
    } 
}