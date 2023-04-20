import { ILoteRepository, LoteCreate } from "./repositories/ILoteRepository";

export class LoteCreateService{
    constructor(private loteRepository:ILoteRepository){}

    async execute(data:LoteCreate){
        const lote= await this.loteRepository.findById(data.id)
        
        if(data.numero === lote?.numero){

            throw new Error("lote já existente")
        }
        data.dataFabricacaco=new Date(data.dataFabricacaco)
        data.dataValidade=new Date(data.dataValidade)
        const loteCreated= await this.loteRepository.save(data)


        return loteCreated;

    }


    async executeDelete(id:string){
        const produtoDeletado=await this.loteRepository.delete(id)
        return produtoDeletado
    
       }
    
       async executeFindAll(){
         const todoslote=await this.loteRepository.findAll()
         return todoslote 
       }
    
       async executeUpdate(id:string, data:LoteCreate){
        const lote= await this.loteRepository.findById(data.id)
    
        if(data.id===lote?.id){
            const produtoUpdate=await this.loteRepository.update(id,data)
            return produtoUpdate
    
        }
    
    
       }
}