import { EntradaContoller } from './modules/entrada/entrada.controller';
import { SolicitanteController } from './modules/solicitante/solicitante.controller';
import { FornecedorController } from './modules/fornecedor/fornecedor.contoller';
import { ProdutoController } from './modules/produtos/produtos.contoller';
import { DepartamentoController } from './modules/departamaneto/departamentor.controller';
import { CategoriaController } from './modules/categorias/categorias.controller';
import {FuncionarioController} from "./modules/funcionarios/funcionarios.controller"
import { Router } from "express";
import { LoteController } from './modules/lote/lote.controller';

const funcionariosRouter= Router()
const categoriasRouter= Router()
const departamentoRouter=Router()
const produtoRouter=Router()
const fornecedorRouter=Router()
const solicitanteRouter=Router()
const loteRouter=Router()
const entradaRouter=Router()

const funcioarioController= new FuncionarioController();
const categoriacontroller=new CategoriaController();
const departamentoController=new DepartamentoController();
const produtoController=new ProdutoController();
const fornecedorController=new FornecedorController();
const solicitanteController=new SolicitanteController()
const loteController=new LoteController()
const entradaContoller=new EntradaContoller()

funcionariosRouter.post('/',funcioarioController.create);
categoriasRouter.post('/',categoriacontroller.create);
departamentoRouter.post('/',departamentoController.create);
produtoRouter.post('/',produtoController.create);
fornecedorRouter.post('/',fornecedorController.create);
solicitanteRouter.post('/',solicitanteController.create)
loteRouter.post("/",loteController.create)
entradaRouter.post("/",loteController.create)

export{funcionariosRouter,categoriasRouter,departamentoRouter,produtoRouter, fornecedorRouter,solicitanteRouter,loteRouter,entradaRouter}