import {Router} from "express";
import { methods as categoryController } from "../controllers/category.controller";

const router = Router();

router.get("/", categoryController.getCategories);

export default router;