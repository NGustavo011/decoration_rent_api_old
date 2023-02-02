import { ProdutoBase, ProdutoBD } from "../../../entities/Produto";
import { ProdutosInterfaceRepository } from "../../../repository/ProdutosInterfaceRepository";

class CreateProdutosService {
    constructor(private produtosRepository: ProdutosInterfaceRepository) {}

    async execute(produtoBase: ProdutoBase): Promise<ProdutoBD> {
        const produto = await this.produtosRepository.create(produtoBase);
        return produto;
    }
}

export { CreateProdutosService };
