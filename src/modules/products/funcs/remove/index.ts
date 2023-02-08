import { ProdutosRepository } from "../../repository/implementations/ProdutosRepository";
import { RemoveProdutosService } from "./service/RemoveProdutosService";
import { RemoveProdutosController } from "./controller/RemoveProdutosController";

const makeRemoveProdutosController = (): RemoveProdutosController => {
    const produtosRepository = new ProdutosRepository();

    const removeProdutosService = new RemoveProdutosService(produtosRepository);

    return new RemoveProdutosController(removeProdutosService);
};

export { makeRemoveProdutosController };
