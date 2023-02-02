import { TemasRepository } from "../../repository/implementations/TemasRepository";
import { RemoveTemasService } from "./service/RemoveTemasService";
import { RemoveTemasController } from "./controller/RemoveTemasController";

const makeRemoveTemasController = (): RemoveTemasController => {
    const temasRepository = new TemasRepository();

    const removeTemasService = new RemoveTemasService(temasRepository);

    return new RemoveTemasController(removeTemasService);
};

export { makeRemoveTemasController };
