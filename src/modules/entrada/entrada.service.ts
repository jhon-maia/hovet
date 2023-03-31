import { EntradaCreate, IEntradaRepository } from "./repositories/IEntradaRepository";


export class EntradaCreateService{
    constructor(private repository:IEntradaRepository){}
    
    async execute(data:EntradaCreate){
        const entradaCreated= await this.repository.save(data)

        return entradaCreated;
        
    }
}