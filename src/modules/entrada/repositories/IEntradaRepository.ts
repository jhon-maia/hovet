import { ProdutosCreate } from "../../produtos/repositories/IProdutosRepository"

export type EntradaCreate={
    id:string,
    tipo:string,
    quantidade:number,
    data:Date,
    produtoId:string,
    produto?:ProdutosCreate
}

export interface IEntradaRepository{
    save(data:EntradaCreate):Promise<EntradaCreate | undefined>
    findById(id:string):Promise<EntradaCreate| undefined>
    findAll():Promise<EntradaCreate[]>;
    delete(id:string):Promise<null>;
    update(id:string,data:EntradaCreate):Promise<EntradaCreate|undefined>
}