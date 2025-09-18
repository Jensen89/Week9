export class Product {
    _id?: string;
    id: number;
    name: string;
    description: string;
    price: number;
    units: number;

    constructor(id: number = 0, name: string = '', description: string = '', price: number = 0, units: number = 0) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.units = units;
    }
}