import { FuncionarioCreate } from "./repositories/IFuncionarioRepository";
import { IFuncionarioRepository } from "./repositories/IFuncionarioRepository";


class CreateFuncionarioService{
    constructor(private funcionarioRepository:IFuncionarioRepository){}

    async execute(data:FuncionarioCreate){

        const funcionario= await this.funcionarioRepository.findByCpf(data.cpf);
        
        
        if(funcionario?.cpf){
           throw new Error("funcionario já existe");
            
        }

        const funcionarioCreated= await this.funcionarioRepository.save(data);
        return funcionarioCreated;

    }

    async executeDelete(id:string){
        const produtoDeletado=await this.funcionarioRepository.delete(id)
        return produtoDeletado
    
       }
    
       async executeFindAll(){
         const todosfuncionario=await this.funcionarioRepository.findAll()
         return todosfuncionario 
       }
    
       async executeUpdate(id:string, data:FuncionarioCreate){
        const funcionario= await this.funcionarioRepository.findByCpf(data.id)
    
        if(data.id===funcionario?.id){
            const produtoUpdate=await this.funcionarioRepository.update(id,data)
            return produtoUpdate
    
        }
    
    
       }

}

export{CreateFuncionarioService};