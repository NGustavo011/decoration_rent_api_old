class ProdutoBase {
    nome: string;
    descricao: string;
    preco_bruto: number;
    preco_liquido: number;
    imagem_url: string;
    categoria_id: string;
    tema_id: string;
}

type ProdutoBaseOptional = Partial<ProdutoBase>;

class ProdutoBD extends ProdutoBase {
    id: string;
    criacao: Date;
}

export { ProdutoBase, ProdutoBaseOptional, ProdutoBD };
