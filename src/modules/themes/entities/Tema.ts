class TemaBase {
    nome: string;
    descricao: string;
}

type TemaBaseOptional = Partial<TemaBase>;

class TemaBD extends TemaBase {
    id: string;
    criacao: Date;
}

export { TemaBase, TemaBaseOptional, TemaBD };
