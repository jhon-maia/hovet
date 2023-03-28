import { prismaClient } from '../../../database/client';
import { FuncionarioCreate, IFuncionarioRepository } from './IFuncionarioRepository';


export class FuncionarioPrismaRepository implements IFuncionarioRepository{

    async save({nome,senha,cpf,email}: FuncionarioCreate): Promise<FuncionarioCreate> {
        const funcionario= await prismaClient.funcionario.create({data:{
            
            nome,
            senha,
            cpf,
            email,

        }})

        const funciorarioSave:FuncionarioCreate={
            id:funcionario.id,
            nome:funcionario.nome,
            senha:funcionario.senha,
            cpf:funcionario.cpf,
            email:funcionario.email
        };
      
        return funciorarioSave;
        
    }

   async  findByCpf(cpf: string): Promise<FuncionarioCreate | null> {
       const funcionario= await prismaClient.funcionario.findFirst({
            where:{
                cpf

            }
        })
         
        const funcionarioFound = new Object(funcionario)
        return funcionarioFound as  FuncionarioCreate;
   }
       
}