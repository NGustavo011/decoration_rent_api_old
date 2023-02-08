import { ProdutoBD } from "../../../entities/Produto";
import { ProdutosInterfaceRepository } from "../../../repository/ProdutosInterfaceRepository";

class RemoveProdutosService {
    constructor(private produtosRepository: ProdutosInterfaceRepository) {}

    async execute(id: string): Promise<ProdutoBD> {
        const produto = await this.produtosRepository.remove(id);
        return produto;
    }
}

export { RemoveProdutosService };
