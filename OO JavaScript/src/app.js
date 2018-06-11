import { Car } from "./classes/car.js";
import { Drone } from "./classes/drone.js";
import { fleet } from "./fleet-data.js";
import { FleetDataService } from "./services/fleet-data-service.js";


let c =  new Car();
let d = new Drone();

let dataService = new FleetDataService();
dataService.loadData(fleet);

window.console.log('In app.js');
window.console.log(c);
window.console.log(d);
window.console.log(fleet);
window.console.log(dataService.cars);
window.console.log(dataService.drones);
for (const car of dataService.cars) {
    window.console.log(car.license);
}

for (const drone of dataService.drones) {
    window.console.log(drone.license);
}

for (const error of dataService.errors) {
    window.console.log(error.message, error.data.type);
}
