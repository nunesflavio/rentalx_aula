import {Category} from "../../entities/Category";
import {ICategoriesRepository, ICreateCategoryDTO} from "../ICategoriesRepository";
import { getRepository, Repository } from 'typeorm';

export class CategoriesRepository implements ICategoriesRepository {

    private repository: Repository<Category>;
    //private static INSTANCE: CategoriesRepository;

     constructor() {
        this.repository = getRepository(Category);
    }

    // Singleton instacia unica, verificar se existe ou nao
   // public static getInstance():CategoriesRepository {
        //se nao tiver valor atribuido, cria uma nova instancia, se ja tiver, retorna instancia ja existente
        //if (!CategoriesRepository.INSTANCE) {
            //CategoriesRepository.INSTANCE = new CategoriesRepository();
       // }

        //return CategoriesRepository.INSTANCE;

    //}

    async create({ description, name }: ICreateCategoryDTO): Promise<void> {

        const category = this.repository.create({
            name,
            description,
        });

        await this.repository.save(category);

    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    };

    async findByName(name: string): Promise<Category> {
        const categor = await this.repository.findOne({ name: name });

        return categor!;
    }


}