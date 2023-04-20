import { ISolicitanteRepository, SolicitanteCreate } from "./repositories/ISolicitanteRepository";

export class SolicitanteCreateService{
    constructor(private solicitanteRepository:ISolicitanteRepository){}

    async execute(data:SolicitanteCreate){
        const solicitante= await this.solicitanteRepository.findById(data.id)
        
        if(data.id === solicitante?.id){

            throw new Error("solicitante já existente")
        }

        const solicitanteCreated= await this.solicitanteRepository.save(data)


        return solicitanteCreated;

    }
    async executeDelete(id:string){
        const produtoDeletado=await this.solicitanteRepository.delete(id)
        return produtoDeletado
    
       }
    
       async executeFindAll(){
         const todossolicitante=await this.solicitanteRepository.findAll()
         return todossolicitante 
       }
    
       async executeUpdate(id:string, data:SolicitanteCreate){
        const solicitante= await this.solicitanteRepository.findById(data.id)
    
        if(data.id===solicitante?.id){
            const produtoUpdate=await this.solicitanteRepository.update(id,data)
            return produtoUpdate
    
        }
    
    
       }
}