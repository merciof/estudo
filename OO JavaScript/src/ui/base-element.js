import { $ } from "jquery";

export class BaseElement {
    constructor() {
        //JQery Object
        this.element = null;
    }

    appendToElement(el){
        this.createElement();
        el.append(this.element);
        this.enableJS();
    }

    createElement() {
        let s = this.getElementString(s);
        this.element = $(s);
    }

    getElementString(){
        throw 'Por favor, sobrescreva a função getElementString() de BaseElement.';
    }

    enableJS(){
        //atualiza elemento específico do DOM
        componentHandler.upgradeElement(this.element[0]);
    }
}