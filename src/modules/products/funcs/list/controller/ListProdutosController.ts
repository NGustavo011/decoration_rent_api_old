import { Request, Response } from "express";
import { BaseController } from "../../../../../contracts/BaseController";
import { ListProdutosService } from "../service/ListProdutosService";

class ListProdutosController extends BaseController {
    constructor(private listProdutosService: ListProdutosService) {
        super();
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const all = await this.listProdutosService.execute();
        return response.json(all);
    }
}

export { ListProdutosController };
