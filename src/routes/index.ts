import { Router } from "express";
import { produtosRoutes } from "./produtos.routes";
import { temasRoutes } from "./temas.routes";

const router = Router();

router.use("/produtos", produtosRoutes);
router.use("/temas", temasRoutes);

export { router };
