import { DepartamentoController } from './modules/departamaneto/departamentor.controller';
import { CategoriaController } from './modules/categorias/categorias.controller';
import {FuncionarioController} from "./modules/funcionarios/funcionarios.controller"
import { Router } from "express";

const funcionariosRouter= Router()
const categoriasRouter= Router()
const departamentoRouter=Router()

const funcioarioController= new FuncionarioController();
const categoriacontroller=new CategoriaController();
const departamentoController=new DepartamentoController();

funcionariosRouter.post('/',funcioarioController.create);
categoriasRouter.post('/',categoriacontroller.create);
departamentoRouter.post('/',departamentoController.create)


export{funcionariosRouter,categoriasRouter,departamentoRouter}