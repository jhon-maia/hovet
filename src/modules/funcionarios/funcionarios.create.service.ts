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

}

export{CreateFuncionarioService};