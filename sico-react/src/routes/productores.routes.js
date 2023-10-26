import e, { Router } from "express";
import { methods as productoresController } from "../controllers/productores.controller";

const router = Router();
router.get("/", productoresController.getProductores);

export default router;
