import { Vehicle } from "./vehicle.js";

export class Car extends Vehicle {
    constructor(license, model, latLong){
        super(license, model, latLong);
        //propriedades específicas do carro
        this.make = null;
        this.miles = null;
    }
}