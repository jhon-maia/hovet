import { prismaClient } from '../../../database/client';
import { IFornecedorRepository, FornecedorCreate } from './IFornecedorRepository';


export class FornecedorPrismaRepository implements IFornecedorRepository {
   
    
    async save({nome,email,cnpj,telefone}: FornecedorCreate): Promise<FornecedorCreate> {

        const fornecedor= await prismaClient.fornecedor.create({data:{
            nome,
            email,
            cnpj,
            telefone
            
        }})

        const fornecedorSave:FornecedorCreate={
            id:fornecedor.id,
            email:fornecedor.email,
            cnpj:fornecedor.cnpj,
            telefone:fornecedor.telefone,
            nome:fornecedor.nome

        } 

        return fornecedorSave;
    }



    async findById(id: string): Promise<FornecedorCreate | undefined> {

        const lote= await  prismaClient.fornecedor.findFirst({
            where:{
            id
        }})
        
      const loteFound=new Object(lote);
      return loteFound as FornecedorCreate;
    } 

}
