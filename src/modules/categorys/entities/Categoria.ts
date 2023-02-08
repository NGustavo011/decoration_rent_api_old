class CategoriaBase {
    nome: string;
    descricao: string;
}

type CategoriaBaseOptional = Partial<CategoriaBase>;

class CategoriaBD extends CategoriaBase {
    id: string;
    criacao: Date;
}

export { CategoriaBase, CategoriaBaseOptional, CategoriaBD };
