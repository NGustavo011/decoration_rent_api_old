import { ProdutoBase, ProdutoBD } from "../entities/Produto";

interface ProdutosInterfaceRepository {
    list(): Promise<ProdutoBD[]>;
    create(produto: ProdutoBase): Promise<ProdutoBD>;
}

export { ProdutosInterfaceRepository };
