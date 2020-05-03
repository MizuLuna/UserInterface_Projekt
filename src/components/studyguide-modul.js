import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataSem from '../data/sem.js'


class Modul extends navigator(LitElement) {
    
    static get properties() {
        return {
            //id: { type: Integer },
            moduleNames: { type: Array },
            wahlModuleNames: { type: Array }
        };
    }

    constructor() {
        super();
        //this.id = null;
        this.moduleNames = [];
        this.wahlModuleNames = [];
    }

    getModuleNames() {
        //var semester = 'semester' + this.id;
        for (let sem in dataSem.semester) {
            if (sem === 'semester1') {
                for (let modul in dataSem.semester[sem]) {
                    this.moduleNames.push(dataSem.semester[sem][modul].name);
                }
            }
        /*    if (sem === 'semester6'){
                for (let wahlModul in dataSem.semester6.modul6) {
                    this.wahlModuleNames.push(dataSem.semester6.modul6[wahlModul].name);
                }
            }*/
        }
    }

    getModulDetails(id) {
        //var url = "semesteruebersicht/semester/1/modul/" + id;
        //console.log(id);
        //this.navigate(url);
    }

    render() {
        return html`
       <link rel="stylesheet" href="../src/styles/modul.css">
        <div class="modul-view">
            ${this.getModuleNames()}
            ${this.moduleNames.map((i,index) => html`<div class="modul" @click=${this.getModulDetails(index+1)}>${i}</div>`)}
          <!--  ${this.wahlModuleNames.map((i) => html`<div class="modul">${i}</div>`)}-->
        </div>
       `;
    }

    //clickHandler(e) {
    //    this.navigate('/semesterview');
    //}
}

customElements.define('studyguide-modul', Modul);