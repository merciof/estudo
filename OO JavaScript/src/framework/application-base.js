import { TitleBar } from "../ui/title-bar-mdl";

//contém código que será reutilizado na aplicação
export class ApplicationBase {
    constructor(title) {
        this.title = title;
        this.titleBar = new TitleBar(this.title);
        this.routeMap = {};
    }

    show(element) {
        this.titleBar.appendToElement(element);
    }

    addRoute(id, pageObject, defaultRoute = false) {
        this.titleBar.addLink(id,'');
        this.routeMap[id] = pageObject;
        if(defaultRoute) {
            this.defaultRoute = id;
        }
    }
}
