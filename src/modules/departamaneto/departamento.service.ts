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
   async executeDelete(id:string){
    const produtoDeletado=await this.departamentoRepository.delete(id)
    return produtoDeletado

   }

   async executeFindAll(){
     const todosdepartamento=await this.departamentoRepository.findAll()
     return todosdepartamento 
   }

   async executeUpdate(id:string, data:DepartamentoCreate){
    const departamento= await this.departamentoRepository.findById(data.id)

    if(data.id===departamento?.id){
        const produtoUpdate=await this.departamentoRepository.update(id,data)
        return produtoUpdate

    }


   }
}