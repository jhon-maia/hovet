import { FornecedorCreate } from './../../fornecedor/repositories/IFornecedorRepository';
import { DepartamentoCreate } from './../../departamaneto/repositories/IDepartamentoPrismaRepository';
import { LoteCreate } from '../../lote/repositories/ILoteRepository';
export type ProdutosCreate={
    id:string,
    nome:string,
    quantidade:number,
    unidade:number,
    departamentoId:string,
    fornecedorId:string,
    loteId:string,
    departamento?:DepartamentoCreate,
    fornecedor:FornecedorCreate,
    lote:LoteCreate

}

export interface IProdutosRepository{

    save(data:ProdutosCreate):Promise<ProdutosCreate|undefined>
    findById(id:string):Promise<ProdutosCreate | null>;
}