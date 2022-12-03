import {ICategoriesRepository, ICreateCategoryDTO} from "../ICategoriesRepository";
import {Category} from "../../entities/Category";

export class PostCategoriesRepository implements  ICategoriesRepository {
    create({ name, description}: ICreateCategoryDTO ): void {
        throw new Error("method not implemented")

    }

    findByName(name: string): Category {
        throw new Error("method not implemented")

    }

    list(): Category[] {
        throw new Error("method not implemented")
    }

}