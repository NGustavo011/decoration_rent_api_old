import { Request, Response } from "express";
import { BaseController } from "../../../../../contracts/BaseController";
import { RemoveProdutosService } from "../service/RemoveProdutosService";
import { z } from "zod";

const CreateProdutosSchema = z.object({
    id: z.string(),
});

class RemoveProdutosController extends BaseController {
    constructor(private removeProdutosService: RemoveProdutosService) {
        super();
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const schemaResult = CreateProdutosSchema.parse(request.body);
        const id = schemaResult.id;
        const all = await this.removeProdutosService.execute(id);

        return response.json(all);
    }
}

export { RemoveProdutosController };
