import { Request, Response } from "express";
import { z } from "zod";
import { BaseController } from "../../../../../contracts/BaseController";
import { ProdutoBase } from "../../../entities/Produto";
import { CreateProdutosService } from "../service/CreateProdutosService";

const CreateProdutosSchema = z.object({
    nome: z.string(),
    descricao: z.string(),
    preco_bruto: z.number(),
    preco_liquido: z.number(),
    imagem_url: z.string(),
    categoria_id: z.string(),
    tema_id: z.string(),
});

class CreateProdutosController extends BaseController {
    constructor(private createProdutosService: CreateProdutosService) {
        super();
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const schemaResult = CreateProdutosSchema.parse(request.body);
        const produtoBase: ProdutoBase = {
            nome: schemaResult.nome,
            descricao: schemaResult.descricao,
            preco_bruto: schemaResult.preco_bruto,
            preco_liquido: schemaResult.preco_liquido,
            imagem_url: schemaResult.imagem_url,
            categoria_id: schemaResult.categoria_id,
            tema_id: schemaResult.tema_id,
        };
        const all = await this.createProdutosService.execute(produtoBase);
        return response.json(all);
    }
}

export { CreateProdutosController };
