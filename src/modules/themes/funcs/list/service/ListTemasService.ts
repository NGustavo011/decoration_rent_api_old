import { TemaBD } from "../../../entities/Tema";
import { TemasInterfaceRepository } from "../../../repository/TemasInterfaceRepository";

class ListTemasService {
    constructor(private temasRepository: TemasInterfaceRepository) {}

    async execute(): Promise<TemaBD[]> {
        const temas = await this.temasRepository.list();
        return temas;
    }
}

export { ListTemasService };
