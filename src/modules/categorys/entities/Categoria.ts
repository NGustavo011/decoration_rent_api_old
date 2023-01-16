import { v4 as uuidV4 } from "uuid";
import { Produto } from "../../products/entities/Produto";

class Categoria {
    id?: string;
    nome: string;
    descricao: string;
    criacao: Date;
    produtos: Produto[];

    constructor() {
        if (!this.id) this.id = uuidV4();
    }
}

export { Categoria };
