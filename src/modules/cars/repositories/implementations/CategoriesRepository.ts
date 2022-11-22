import {Category} from "../../model/Category";
import {ICategoriesRepository, ICreateCategoryDTO} from "../ICategoriesRepository";

export class CategoriesRepository implements ICategoriesRepository {

    private categories: Category[];
    private static INSTANCE: CategoriesRepository;

    private constructor() {
        this.categories = [];
    }

    // Singleton instacia unica, verificar se existe ou nao
    public static getInstance():CategoriesRepository {
        //se nao tiver valor atribuido, cria uma nova instancia, se ja tiver, retorna instancia ja existente
        if (!CategoriesRepository.INSTANCE) {
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }

        return CategoriesRepository.INSTANCE;

    }

    create({ description, name }: ICreateCategoryDTO): void {

        const category: Category = new Category();

        Object.assign(category, {
            name,
            description,
            create_at: new Date(),
        })


        this.categories.push(category);

    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const categoryName = this.categories.find(category => category.name === name)!;
        return categoryName;

    }


}