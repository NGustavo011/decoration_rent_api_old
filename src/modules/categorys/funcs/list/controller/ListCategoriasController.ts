import { Request, Response } from "express";
import { BaseController } from "../../../../../contracts/BaseController";
import { ListCategoriasService } from "../service/ListCategoriasService";

class ListCategoriasController extends BaseController {
    constructor(private listCategoriasService: ListCategoriasService) {
        super();
    }

    async handle(request: Request, response: Response): Promise<Response> {
        const all = await this.listCategoriasService.execute();
        return response.json(all);
    }
}

export { ListCategoriasController };
