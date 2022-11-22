import {Response, Request} from "express";
import {CreateCategoryUseCase} from "./CreateCategoryUseCase";

export class CreateCategoryController {

    constructor(private CreateCategoryUseCase: CreateCategoryUseCase) {
    }

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body

        this.CreateCategoryUseCase.execute({ description, name });

        //return response.status(201).json({ category });
        return response.status(201).send();

    }

}