import { ProdutoBD } from "../../../entities/Produto";
import { ProdutosInterfaceRepository } from "../../../repository/ProdutosInterfaceRepository";

class ListProdutosService {
    constructor(private produtosRepository: ProdutosInterfaceRepository) {}

    async execute(): Promise<ProdutoBD[]> {
        const produtos = await this.produtosRepository.list();
        return produtos;
    }
}

export { ListProdutosService };
