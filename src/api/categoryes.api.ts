import api from "./http"


type CategoryCreate = {
    id: string;
    name: string;
    description: string;
    active: boolean
}


export class Categories {

    static async create(data:CategoryCreate){
        await api.post('/categories', data)

    }
}