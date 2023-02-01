import { Router } from "express";
import { makeListProdutosController } from "../modules/products/funcs/list";
import { makeCreateProdutosController } from "../modules/products/funcs/create";

const produtosRoutes = Router();

produtosRoutes.get("/", (request, response) => {
    return makeListProdutosController().execute(request, response);
});

produtosRoutes.post("/", (request, response) => {
    return makeCreateProdutosController().execute(request, response);
});

export { produtosRoutes };
