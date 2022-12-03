import {Router} from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController"

const specificationRoutes = Router();

const createCategoryController = new CreateSpecificationController();

specificationRoutes.post("/", createCategoryController.handle);

export { specificationRoutes }