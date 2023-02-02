import { PrismaClient, Produto } from "@prisma/client";
import { ProdutosInterfaceRepository } from "../ProdutosInterfaceRepository";
import { prisma } from "../../../../database";
import { ProdutoBase, ProdutoBD } from "../../entities/Produto";
import { Categoria } from "../../../categorys/entities/Categoria";

class ProdutosRepository implements ProdutosInterfaceRepository {
    private repository: PrismaClient;

    constructor() {
        this.repository = prisma;
    }

    async list(): Promise<ProdutoBD[]> {
        return await this.repository.produto.findMany({
            include: { categoria: true, tema: true },
        });
    }

    async create(produto: ProdutoBase): Promise<ProdutoBD> {
        return await this.repository.produto.create({
            data: produto,
        });
    }
}

export { ProdutosRepository };
