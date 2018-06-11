import { Car } from "../classes/car.js";
import { Drone } from "../classes/drone.js";

export class FleetDataService {
    constructor(){
        this.cars = [];
        this.drones = [];
    }

    loadData(fleet) {
        for(let data of fleet) {
            switch(data.type){
                case 'car':
                    let car = this.loadCar(data);
                    this.cars.push(car);
                    break;    
                case 'drone':
                    let drone = this.loadDrone(data);
                    this.drones.push(drone);
                    break;
            }
        }
    }
    //instancia um objeto da classe Car a partir dos dados do JSON
    loadCar(car){
        let c = new Car(car.license, car.model, car.latLong);
        c.miles = car.miles;
        c.make = car.make;
        return c;
    }
    //instancia um objeto da Classe Drone a partir dos dados do JSON
    loadDrone(drone){
        let d = new Drone(drone.license, drone.model, drone.latLong);
        d.airTimeHours = drone.airTimeHours;
        d.base = drone.base;
        return d;
    }
}