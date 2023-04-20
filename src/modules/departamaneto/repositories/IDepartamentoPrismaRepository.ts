import { CategoriaCreate } from './../../categorias/repositories/ICategoriaRepository';

export type DepartamentoCreate={
 id:string,
 nome:string,
 categoriaId:string
 categoria:CategoriaCreate
}


export interface IDeparatamentoRepository{

    save(data:DepartamentoCreate):Promise<DepartamentoCreate|undefined>
    findById(id:string):Promise<DepartamentoCreate | null>;
    findAll():Promise<DepartamentoCreate[]>;
    delete(id:string):Promise<null>;
    update(id:string,data:DepartamentoCreate):Promise<DepartamentoCreate|undefined>
}