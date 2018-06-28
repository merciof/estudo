import $ from "jquery";
import { fleet } from "./fleet-data.js";
import { FleetDataService } from "./services/fleet-data-service.js";
import { ApplicationBase } from "./framework/application-base";

export class App extends ApplicationBase {
    constructor(){
        super('Fleet Manager');
        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);
    }
}

//bootstrapping Objeto base 'application' usado para a criação de outros objetos
export let application = new App();

application.show($('body'));



