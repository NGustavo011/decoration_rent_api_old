import { ProdutoBaseOptional, ProdutoBD } from "../../../entities/Produto";
import { ProdutosInterfaceRepository } from "../../../repository/ProdutosInterfaceRepository";

class UpdateProdutosService {
    constructor(private produtosRepository: ProdutosInterfaceRepository) {}

    async execute(
        id: string,
        produto: ProdutoBaseOptional
    ): Promise<ProdutoBD> {
        const produtoUpdated = await this.produtosRepository.update(
            id,
            produto
        );
        return produtoUpdated;
    }
}

export { UpdateProdutosService };
