import { ProdutosRepository } from "../../repository/implementations/ProdutosRepository";
import { CreateProdutosService } from "./service/CreateProdutosService";
import { CreateProdutosController } from "./controller/CreateProdutosController";

const makeCreateProdutosController = (): CreateProdutosController => {
    const produtosRepository = new ProdutosRepository();

    const createProdutosService = new CreateProdutosService(produtosRepository);

    return new CreateProdutosController(createProdutosService);
};

export { makeCreateProdutosController };
