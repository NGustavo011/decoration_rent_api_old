import { Request, Response } from "express";
import { z } from "zod";
import { BaseController } from "../../../../../contracts/BaseController";
import { TemaBase } from "../../../entities/Tema";
import { CreateTemasService } from "../service/CreateTemasService";

const CreateTemasSchema = z.object({
    nome: z.string(),
    descricao: z.string(),
});

class CreateTemasController extends BaseController {
    constructor(private createTemasService: CreateTemasService) {
        super();
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const schemaResult = CreateTemasSchema.parse(request.body);
        const temaBase: TemaBase = {
            nome: schemaResult.nome,
            descricao: schemaResult.descricao,
        };
        const all = await this.createTemasService.execute(temaBase);
        return response.json(all);
    }
}

export { CreateTemasController };
