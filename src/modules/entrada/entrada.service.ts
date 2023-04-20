import { EntradaCreate, IEntradaRepository } from "./repositories/IEntradaRepository";


export class EntradaCreateService{
    constructor(private entradaRepository:IEntradaRepository){}
    
    async execute(data:EntradaCreate){
        const entradaCreated= await this.entradaRepository.save(data)

        return entradaCreated;
        
    }
    async executeDelete(id:string){
        const entradaDeletado=await this.entradaRepository.delete(id)
        return entradaDeletado
    
       }
    
       async executeFindAll(){
         const todosentrada=await this.entradaRepository.findAll()
         return todosentrada 
       }
    
       async executeUpdate(id:string, data:EntradaCreate){
        const entrada= await this.entradaRepository.findById(data.id)
    
        if(data.id===entrada?.id){
            const entradaUpdate=await this.entradaRepository.update(id,data)
            return entradaUpdate
    
        }
    
    
       }
}