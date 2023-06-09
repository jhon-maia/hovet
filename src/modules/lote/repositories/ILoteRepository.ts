export  type LoteCreate={
    id:string,
    numero:string,
    fabricante:string,
    dataValidade:Date,
    dataFabricacaco:Date
}


export interface ILoteRepository{
    save(data:LoteCreate):Promise<LoteCreate|undefined>
    findById(id:String):Promise<LoteCreate|undefined>
   findAll():Promise<LoteCreate[]>;
    delete(id:string):Promise<null>;
    update(id:string,data:LoteCreate):Promise<LoteCreate|undefined>
} 