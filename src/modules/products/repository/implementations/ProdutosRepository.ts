import { PrismaClient } from "@prisma/client";
import { ProdutosInterfaceRepository } from "../ProdutosInterfaceRepository";
import { prisma } from "../../../../database";
import {
    ProdutoBase,
    ProdutoBD,
    ProdutoCompletedBD,
} from "../../entities/Produto";

class ProdutosRepository implements ProdutosInterfaceRepository {
    private repository: PrismaClient;

    constructor() {
        this.repository = prisma;
    }

    async list(): Promise<ProdutoCompletedBD[]> {
        const produtos = await this.repository.produto.findMany({
            include: { categoria: true, tema: true },
        });
        const produtosFormatado: ProdutoCompletedBD[] = produtos.map(
            produto => ({
                id: produto.id,
                nome: produto.nome,
                descricao: produto.descricao,
                preco_bruto: produto.preco_bruto,
                preco_liquido: produto.preco_liquido,
                criacao: produto.criacao,
                imagem_url: produto.imagem_url,
                categoria_id: produto.categoria_id,
                categoria: produto.categoria,
                tema_id: produto.tema_id,
                tema: produto.tema,
            })
        );
        return produtosFormatado;
    }

    async create(produto: ProdutoBase): Promise<ProdutoBD> {
        return await this.repository.produto.create({
            data: produto,
        });
    }

    async update(
        id: string,
        produto: Partial<ProdutoBase>
    ): Promise<ProdutoBD> {
        return await this.repository.produto.update({
            where: { id },
            data: produto,
            include: { categoria: true, tema: true },
        });
    }

    async remove(id: string): Promise<ProdutoCompletedBD> {
        const produto = await this.repository.produto.delete({
            where: { id },
            include: { categoria: true, tema: true },
        });
        const produtoFormatado: ProdutoCompletedBD = {
            id: produto.id,
            nome: produto.nome,
            descricao: produto.descricao,
            preco_bruto: produto.preco_bruto,
            preco_liquido: produto.preco_liquido,
            criacao: produto.criacao,
            imagem_url: produto.imagem_url,
            categoria_id: produto.categoria_id,
            categoria: produto.categoria,
            tema_id: produto.tema_id,
            tema: produto.tema,
        };
        return produtoFormatado;
    }
}

export { ProdutosRepository };
