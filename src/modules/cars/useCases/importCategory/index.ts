import {ImportCategoryController} from "./ImportCategoryController";
import {ImportCategoryUseCase} from "./ImportCategoryUseCase";
import {CategoriesRepository} from "../../repositories/implementations/CategoriesRepository";

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
export const importCategoryController = new ImportCategoryController(importCategoryUseCase);