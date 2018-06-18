import { BaseElement } from "./base-element.js";

export class DataTable extends BaseElement {
    constructor(headers, cars) {
        super();
        this.headers = headers;
        this.cars = cars;
    }

    getElementString() {

        let thTags = '';
        let trTags = '';

        //cria os cabeçalhos da tabela
        for (const h of this.headers) {
            thTags += `<th class="mdl-data-table__cell--non-numeric">${h}</th>`
        }

        //cria os dados das linhas da tabela
        for (const row of this.cars) {
            trTags += `<tr>`; 

            for (const property of this.headers) {
                let field = row[property.toLowerCase()];

                trTags += `<td>
                           ${field}
                           </td>`;
            }
            trTags += '</tr>';
        }

        return `<table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            ${thTags}
          </tr>
        </thead>
        <tbody>
          ${trTags}
          </tr>
        </tbody>
      </table>`
    }
}
