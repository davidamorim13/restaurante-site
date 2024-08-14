import api from "./http"


type CategoryCreate = {
    name: string
    active: boolean
}


export class Categories {

    static async create(data:CategoryCreate){
        await api.post('/categories', data)

    }
}