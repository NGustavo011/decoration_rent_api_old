import { ProdutosRepository } from "../../repository/implementations/ProdutosRepository";
import { UpdateProdutosController } from "./controller/UpdateProdutosController";
import { UpdateProdutosService } from "./service/UpdateProdutosService";

const makeUpdateProdutosController = (): UpdateProdutosController => {
    const produtosRepository = new ProdutosRepository();

    const updateProdutosService = new UpdateProdutosService(produtosRepository);

    return new UpdateProdutosController(updateProdutosService);
};

export { makeUpdateProdutosController };
