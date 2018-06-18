import $ from "jquery";
import { Car } from "./classes/car.js";
import { Drone } from "./classes/drone.js";
import { fleet } from "./fleet-data.js";
import { FleetDataService } from "./services/fleet-data-service.js";
import { Button } from "./ui/button.js";
import { Image } from "./ui/image.js";
import { TitleBar } from "./ui/title-bar.js";
import { DataTable } from "./ui/data-table.js";



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

// let tb = new TitleBar('Our application');
// tb.addLink('Home', '');
// tb.addLink('Cars', '');
// tb.addLink('Drones', '');
// tb.addLink('Maps', '');
// tb.appendToElement($('body'));
// window.console.log(tb);

let headers = 'License Make Model Miles'.split(' ');
let dataService = new FleetDataService();
dataService.loadData(fleet);
let dt = new DataTable(headers, dataService.cars);
dt.appendToElement($('body'));



