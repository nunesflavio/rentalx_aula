import {inject, injectable} from "tsyringe";
import {IUsersRepository} from "../../repositories/IUsersRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import {AppError} from "../../../../errors/AppError";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
    user: {
        name: string,
        email: string,
    },
    token: string,
}

@injectable()
export class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {
    }
    async execute({ email, password }: IRequest) {
        //usuario existe ?
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError("Email or password incorrect")
        }

        const passwordMatch = await compare(password, user.password);
        //senha correta
        if (!passwordMatch) {
            throw new AppError("Email or password incorrect")
        }

        const token = sign({}, "23d6e2be089bed49550f30814e08ad60", {
            subject: user.id,
            expiresIn: "1d"
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            },
        }

        return tokenReturn;

    }
}