import { v4 as uuid4 } from 'uuid';

export class Category {
    id?: string;
    name: string;
    description: string;
    create_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid4();
        }
    }
}