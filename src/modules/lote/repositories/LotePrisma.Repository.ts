import { prismaClient } from '../../../database/client';
import { ILoteRepository, LoteCreate } from './ILoteRepository';


export class LotePrismaRepository implements ILoteRepository {

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
            dataValidade:lote.dataValidade,
            dataFabricacaco:lote.dataFabricacaco

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