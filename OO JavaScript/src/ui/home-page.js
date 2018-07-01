import { BaseElement } from "./base-element";

export class HomePage extends BaseElement {
    constructor(){
        super();
    }

    createElement(){
        super.createElement();

        let i = new Image('../images/drone.jpg');
        i.appendToElement(this.element);

        let b = new Button('Self Driving Cars');
        b.setStyleString(styleString);

        b.appendToElement(this.element);
    }

    getElementString(){
        return '<div style="text-align: center; </div>"'
    }
}