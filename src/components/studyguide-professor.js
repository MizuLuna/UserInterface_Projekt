import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataSem from '../data/sem.js'
import dataProf from '../data/prof.js'


class Professor extends navigator(LitElement) {
    
    static get properties() {
        return {
            //id: { type: Integer },
            moduleProf: { type: Array },
            moduleProfTitle: { type: Array },
            moduleSWSv: { type: Array },
            moduleSWSue: { type: Array },
            moduleSWSp: { type: Array }
        };
    }

    constructor() {
        super();
        //this.id = null;
        this.moduleProf = [];
        this.moduleProfTitle = [];
        this.moduleSWSv = [];
        this.moduleSWSue = [];
        this.moduleSWSp = [];
    }
   
    getModuleInfo() {
        //var semester = 'semester' + this.id;
        for (var sem in dataSem.semester) {
            if (sem === 'semester1') {
                for (var modul in dataSem.semester[sem]) {
                    if (modul === 'modul1') {
                        this.moduleProf.push(dataSem.semester[sem][modul].profname);
                        this.moduleSWSv.push(dataSem.semester[sem][modul].hour.vorlesung);
                        this.moduleSWSue.push(dataSem.semester[sem][modul].hour.uebung);
                        this.moduleSWSp.push(dataSem.semester[sem][modul].hour.praktikum);
                    }
                }
            }
        }
        for (var prof in dataProf.professoren) {
            //id Vergleich aus dataSem des Profs und in dataProf!!!!!
            if (prof === 'professor1') {
                    this.moduleProfTitle.push(dataProf.professoren[prof].title);
            }
        }
    }
    
    render() {
        return html`
        <link rel="stylesheet" href="../src/styles/font-style.css">
        <link rel="stylesheet" href="../src/styles/details.css">
       ${this.getModuleInfo()}
       

        <div class="professor detail detail-style detail-style-sem font-fam">
            ${this.moduleProf.map((i) => html`<h4 class="font-weight-600 font-size-md">${i}</h4>`)} 
            ${this.moduleProfTitle.map((i) => html`<h4 class="font-weight-600 font-size-md">${i}</h4>`)} 
            </br>
            ${this.moduleSWSv.map((i) => html`<p class="font-weight-300 font-size-s">${i} SWS Vorlesung</p>`)} 
            ${this.moduleSWSue.map((i) => html`<p class="font-weight-300 font-size-s">${i}  SWS Übung</p>`)} 
            ${this.moduleSWSp.map((i) => html`<p class="font-weight-300 font-size-s">${i} SWS Übung</p>`)} 
        </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-professor', Professor);