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
       <link rel="stylesheet" href="../src/styles/modul.css">
        <div class="modul-view">
            ${this.getModuleNames()}
            <!--${this.moduleNames.map((i,index) => html`<div class="modul" @click=${this.getModulDetails(index+1)}>${i}</div>`)}-->
            ${this.moduleNames.map((i, index) => html`<div class="modul" @click=${this.clickHandler}>${i}</div>`)}
<!--
            <div class="modul" @click=${this.clickHandler}>${dataSem.semester.semester1.modul1.name}</div>
            <div class="modul" @click=${this.clickHandler}>${dataSem.semester.semester1.modul2.name}</div> 
            <div class="modul" @click=${this.clickHandler}>${dataSem.semester.semester1.modul3.name}</div>
            <div class="modul" @click=${this.clickHandler}>${dataSem.semester.semester1.modul4.name}</div>
            <div class="modul" @click=${this.clickHandler}>${dataSem.semester.semester1.modul5.name}</div>
            <div class="modul" @click=${this.clickHandler}>${dataSem.semester.semester1.modul6.name}</div>
-->
        </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesteruebersicht/semester/1/modul/1');
    }
}

customElements.define('studyguide-modul', Modul);