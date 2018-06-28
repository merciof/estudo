import { TitleBar } from "../ui/title-bar-mdl";

//contém código que será reutilizado na aplicação
export class ApplicationBase {
    constructor(title) {
        this.title = title;
        this.titleBar = new TitleBar(this.title);
    }

    show(element){
        this.titleBar.appendToElement(element);
    }
}
