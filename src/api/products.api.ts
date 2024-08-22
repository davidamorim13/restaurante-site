import api from "./http";

type Product = {
    id: number;
    name: string;
    price: number;
    categoriid: number;
    active: boolean;
}

export class Products {
    static async  create(data:Product){
        return api.post('products',data)
    }
}