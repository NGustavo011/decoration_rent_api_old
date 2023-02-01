import { ProdutoBase, ProdutoCreated } from "../entities/Produto";

interface ProdutosInterfaceRepository {
    list(): Promise<ProdutoCreated[]>;
    create(produto: ProdutoBase): Promise<ProdutoCreated>;
}

export { ProdutosInterfaceRepository };
