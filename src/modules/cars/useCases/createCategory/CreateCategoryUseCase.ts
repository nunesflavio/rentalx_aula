import {ICategoriesRepository} from "../../repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";
import {AppError} from "../../../../errors/AppError";

interface IRequest {
    name: string;
    description: string;

}

@injectable()
export class CreateCategoryUseCase {

    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) { }

    async execute({description, name}: IRequest): Promise<void> {

        const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

        if (categoryAlreadyExists) {
            throw new AppError("Category Already exists!")
        }

        this.categoriesRepository.create({ name, description });
    }

}

