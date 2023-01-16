import { v4 as uuidV4 } from "uuid";

class Usuario {
    id?: string;
    nome: string;
    sobrenome: string;
    email: string;
    senha: string;
    admin: boolean;
    verificado: boolean;
    criacao: Date;
    pedidos;

    constructor() {
        if (!this.id) this.id = uuidV4();
    }
}

export { Usuario };
