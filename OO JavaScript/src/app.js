import  $  from "jquery";
import { Car } from "./classes/car.js";
import { Drone } from "./classes/drone.js";
import { fleet } from "./fleet-data.js";
import { FleetDataService } from "./services/fleet-data-service.js";
import { Button } from "./ui/button.js";
import { Image } from "./ui/image.js";


// let dataService = new FleetDataService();
// dataService.loadData(fleet);


// window.console.log(dataService.cars);
// window.console.log(dataService.drones);

// for (const car of dataService.cars) {
//     window.console.log(car.license);
// }

// for (const drone of dataService.drones) {
//     window.console.log(drone.license);
// }

// for (const error of dataService.errors) {
//     window.console.log(error.message);
// }

let b = new Button('Clique aqui');
b.appendToElement($('body'));

let i = new Image('images/drone.jpg');
i.appendToElement($('body'));