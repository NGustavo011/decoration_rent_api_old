import { Router } from "express";
import { makeListProdutosController } from "../modules/products/funcs/list";
import { makeCreateProdutosController } from "../modules/products/funcs/create";
import { makeRemoveProdutosController } from "../modules/products/funcs/remove";
import { makeUpdateProdutosController } from "../modules/products/funcs/update";

const produtosRoutes = Router();

produtosRoutes.get("/", (request, response) => {
    return makeListProdutosController().execute(request, response);
});

produtosRoutes.post("/", (request, response) => {
    return makeCreateProdutosController().execute(request, response);
});

produtosRoutes.patch("/", (request, response) => {
    return makeUpdateProdutosController().execute(request, response);
});

produtosRoutes.delete("/", (request, response) => {
    return makeRemoveProdutosController().execute(request, response);
});

export { produtosRoutes };
