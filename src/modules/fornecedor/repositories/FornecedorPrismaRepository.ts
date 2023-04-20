import { prismaClient } from '../../../database/client';
import { IFornecedorRepository, FornecedorCreate } from './IFornecedorRepository';


export class FornecedorPrismaRepository implements IFornecedorRepository {
    async findAll(): Promise<FornecedorCreate[]> {
        const fornecedor = await prismaClient.fornecedor.findMany()

        return fornecedor as FornecedorCreate[]

    }

    async delete(id: string): Promise<null> {
        const fornecedor = await prismaClient.fornecedor.delete({
            where: {
                id
            }
        })

        return null;
    }
   async  update(id: string, {nome,email,cnpj,telefone}: FornecedorCreate): Promise<FornecedorCreate | undefined> {

    const fornecedor = await prismaClient.fornecedor.update(
        {
            where:{

               id:id
            },
             data: {
               
                nome,
                email,
                cnpj,
                telefone
                
                
            }
        })

        const fornecedorUpdate: FornecedorCreate = {
            id:fornecedor.id,
            email:fornecedor.email,
            cnpj:fornecedor.cnpj,
            telefone:fornecedor.telefone,
            nome:fornecedor.nome


        }
     
        return fornecedorUpdate
        
    }
    
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

        const fornecedor= await  prismaClient.fornecedor.findFirst({
            where:{
            id
        }})
        
      const fornecedorFound=new Object(fornecedor);
      return fornecedorFound as FornecedorCreate;
    } 

}
