import { TemaBD } from "../../../entities/Tema";
import { TemasInterfaceRepository } from "../../../repository/TemasInterfaceRepository";

class RemoveTemasService {
    constructor(private temasRepository: TemasInterfaceRepository) {}

    async execute(id: string): Promise<TemaBD> {
        const tema = await this.temasRepository.remove(id);
        return tema;
    }
}

export { RemoveTemasService };
