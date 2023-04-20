export type CategoriaCreate={
    id:string,
    nome:string
}

export interface ICategoriaRepository{
    save(data:CategoriaCreate):Promise<CategoriaCreate>
    findById(id:string):Promise<CategoriaCreate|null>
    findAll():Promise<CategoriaCreate[]>;
    delete(id:string):Promise<null>;
    update(id:string,data:CategoriaCreate):Promise<CategoriaCreate|undefined>
}
    
