import { Vehicle } from "./vehicle.js";

export class Drone extends Vehicle {
    constructor(license, model, latLong){
        super(license, model, latLong);
        //propriedades específicas do drone
        this.airTimeHours = null;
        this.base = null;
    }
}