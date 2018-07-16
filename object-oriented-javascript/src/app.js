import $ from "jquery";
import { fleet } from "./fleet-data.js";
import { FleetDataService } from "./services/fleet-data-service.js";
import { ApplicationBase } from "./framework/application-base";
import { HomePage } from "./ui/home-page.js";

export class App extends ApplicationBase {
    constructor(){
        super('Fleet Manager');
        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);

        this.addRoute('Home', new HomePage(), true);
        this.addRoute('Cars', null, true);
        this.addRoute('Drones', null, true);
    }
}

//bootstrapping Objeto base 'application' usado para a criação de outros objetos
export let application = new App();

application.show($('body'));



