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
}

export { Usuario };
