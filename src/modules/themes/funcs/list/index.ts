import { TemasRepository } from "../../repository/implementations/TemasRepository";
import { ListTemasService } from "./service/ListTemasService";
import { ListTemasController } from "./controller/ListTemasController";

const makeListTemasController = (): ListTemasController => {
    const temasRepository = new TemasRepository();

    const listTemasService = new ListTemasService(temasRepository);

    return new ListTemasController(listTemasService);
};

export { makeListTemasController };
