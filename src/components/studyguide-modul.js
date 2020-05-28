import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataSem from '../data/sem.js'


class Modul extends navigator(LitElement) {
    
    static get properties() {
        return {
            //id: { type: Integer },
            moduleNames: { type: Array }
        };
    }

    constructor() {
        super();
        //this.id = null;
        this.moduleNames = [];
    }

    getModuleNames() {
        //var semester = 'semester' + this.id;
        for (var sem in dataSem.semester) {
            if (sem === 'semester1') {
                for (var modul in dataSem.semester[sem]) {
                    this.moduleNames.push(dataSem.semester[sem][modul].name);
                }
            }
        }
    }

    getModulDetails(id) {
        //var url = "semesteruebersicht/semester/1/modul/" + id;
        //console.log(id);
        //this.navigate(url);
    }

    render() {
        return html`
        <link rel="stylesheet" href="../src/styles/font-style.css">
        <link rel="stylesheet" href="../src/styles/modul.css">
        ${this.getModuleNames()}

        <div class="modul-view font-fam font-size-md font-weight-600">
            ${this.moduleNames.map((i) => html`<div class="modul modul-style" @click=${this.clickHandler}>${i}</div>`)}
        </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesteruebersicht/semester/1/modul/1');
    }
}

customElements.define('studyguide-modul', Modul);