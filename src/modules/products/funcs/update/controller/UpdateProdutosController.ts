import { Request, Response } from "express";
import { BaseController } from "../../../../../contracts/BaseController";
import { UpdateProdutosService } from "../service/UpdateProdutosService";
import { z } from "zod";
import { ProdutoBaseOptional } from "../../../entities/Produto";

const CreateProdutosSchema = z.object({
    id: z.string(),
    produto: z.object({
        nome: z.string().optional(),
        descricao: z.string().optional(),
        preco_bruto: z.number().optional(),
        preco_liquido: z.number().optional(),
        imagem_url: z.string().optional(),
        categoria_id: z.string().optional(),
        tema_id: z.string().optional(),
    }),
});

class UpdateProdutosController extends BaseController {
    constructor(private updateProdutosService: UpdateProdutosService) {
        super();
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const schemaResult = CreateProdutosSchema.parse(request.body);
        const id = schemaResult.id;
        const produto: ProdutoBaseOptional = schemaResult.produto;
        const all = await this.updateProdutosService.execute(id, produto);

        return response.json(all);
    }
}

export { UpdateProdutosController };
