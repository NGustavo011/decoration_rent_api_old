import { v4 as uuidV4 } from "uuid";

class Produto {
    id?: string;
    nome: string;
    descricao: string;
    precoBruto: number;
    precoLiquido: number;
    email: string;
    admin: boolean;
    criacao: Date;
    imagemUrl: string;
    categoria_id: string;
    categoria;
    tema_id: string;
    tema;

    constructor() {
        if (!this.id) this.id = uuidV4();
    }
}

export { Produto };
