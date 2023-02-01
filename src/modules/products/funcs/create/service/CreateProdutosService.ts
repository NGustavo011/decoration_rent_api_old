import { ProdutoBase, ProdutoCreated } from "../../../entities/Produto";
import { ProdutosInterfaceRepository } from "../../../repository/ProdutosInterfaceRepository";

class CreateProdutosService {
    constructor(private produtosRepository: ProdutosInterfaceRepository) {}

    async execute(produtoBase: ProdutoBase): Promise<ProdutoCreated> {
        const produto = await this.produtosRepository.create(produtoBase);
        return produto;
    }
}

export { CreateProdutosService };
