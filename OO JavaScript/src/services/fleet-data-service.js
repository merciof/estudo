import { Car } from "../classes/car.js";
import { Drone } from "../classes/drone.js";
import { DataError } from "../classes/data-error.js";

export class FleetDataService {
    constructor() {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }

    loadData(fleet) {
        //para cada objeto contido no array de objetos fleet
        for (let data of fleet) {
            switch (data.type) {
                case 'car':
                    let car = this.loadCar(data);
                    this.cars.push(car);
                    break;
                case 'drone':
                    let drone = this.loadDrone(data);
                    this.drones.push(drone);
                    break;
                default:
                    let e = new DataError('Tipo inválido de veículo.', data);
                    this.errors.push(e);
                    break;
            }
        }
    }
    //instancia um objeto da classe Car a partir dos dados do JSON
    loadCar(car) {
        try {
            let c = new Car(car.license, car.model, car.latLong);
            c.miles = car.miles;
            c.make = car.make;
            return c;
        } catch (error) {
            //cria uma instancia de um objeto da classe DataError
            let e = new DataError('Erro no carregamento do objeto carro.', car);
            //insere o objeto erro no array 'erros'
            this.errors.push(e);
        }
        return null;
    }
    //instancia um objeto da Classe Drone a partir dos dados do JSON
    loadDrone(drone) {
        let d = new Drone(drone.license, drone.model, drone.latLong);
        d.airTimeHours = drone.airTimeHours;
        d.base = drone.base;
        return d;
    }
}