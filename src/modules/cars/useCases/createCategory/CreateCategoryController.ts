import {Response, Request} from "express";
import {CreateCategoryUseCase} from "./CreateCategoryUseCase";
import { container } from "tsyringe";

export class CreateCategoryController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body
        const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
        try {
            await createCategoryUseCase.execute({ description, name });
        } catch (e) {
            return response.status(400).json({ message: (e as Error).message });
        }
        //return response.status(201).json({ category });
        return response.status(201).send();

    }

}