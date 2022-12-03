import {NextFunction, Request, Response} from "express";
import { verify } from "jsonwebtoken";
import {UsersRepository} from "../modules/accounts/repositories/implementatios/UsersRepository";
import {AppError} from "../errors/AppError";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }
    // [0] Bearer  [1] iuirturiturituir
    const [, token] = authHeader.split(" ");

    try {
       const { sub: user_id } = verify(token, "23d6e2be089bed49550f30814e08ad60") as IPayload;

       const usersRepository = new UsersRepository();
       const user = await usersRepository.findById(user_id);

       if (!user) {
           throw new AppError("User does not Exists", 401);
       }

       request.user = {
           id: user_id
       };

       next();
    } catch {
        throw new AppError("Invalid token", 401);
    }
}
