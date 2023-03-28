import { DepartamentoCreate, IDeparatamentoRepository } from './repositories/IDepartamentoPrismaRepository';

export class DepartamentoCreateService{
    constructor(private departamentoRepository:IDeparatamentoRepository){}

   async execute(data:DepartamentoCreate){
    const departamento= await this.departamentoRepository.findById(data.id)

    if(departamento?.nome===data.nome){
        throw new Error("departamento já existe")
    }

    const departamentoCreated= await this.departamentoRepository.save(data)

    return departamentoCreated;


   }
}