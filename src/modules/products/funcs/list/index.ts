import { ProdutosRepository } from "../../repository/implementations/ProdutosRepository";
import { ListProdutosService } from "./service/ListProdutosService";
import { ListProdutosController } from "./controller/ListProdutosController";

const makeListProdutosController = (): ListProdutosController => {
    const produtosRepository = new ProdutosRepository();

    const listProdutosService = new ListProdutosService(produtosRepository);

    return new ListProdutosController(listProdutosService);
};

export { makeListProdutosController };
