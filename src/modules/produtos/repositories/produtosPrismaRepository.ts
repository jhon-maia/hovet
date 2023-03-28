import { prismaClient } from "../../../database/client"
import { IProdutosRepository, ProdutosCreate } from "./IProdutosRepository"


export class ProdutosPrismaRepository implements IProdutosRepository {

    async save({ nome,quantidade,unidade,departamentoId,fornecedorId,loteId}: ProdutosCreate): Promise<ProdutosCreate | undefined> {

        const produtos = await prismaClient.produto.create(
            {
                data:{

                    nome,
                    quantidade,
                    unidade,
                    departamentoId,
                    fornecedorId,
                    loteId
                },
                include: {
                    departamento: true,
                    fornecedor:true,
                    lote:true 
                }
            })

        const ProdutosSave: ProdutosCreate = {
            id: produtos.id,
            nome: produtos.nome,
            quantidade: produtos.quantidade,
            unidade: produtos.unidade,
            lote: produtos.lote,
            fornecedor: produtos.fornecedor,
            departamentoId: produtos.departamentoId,
            fornecedorId: produtos.fornecedorId,
            loteId: produtos.loteId
        }
     
        return ProdutosSave
    }

    async findById(id: string): Promise<ProdutosCreate | null> {

        const produto = await prismaClient.produto.findFirst({
            where: {
                id
            }
        })

        const produtosFound = new Object(produto)

        return produtosFound as ProdutosCreate

    }
}