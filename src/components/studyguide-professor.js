import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataSem from '../data/sem.js'
import dataProf from '../data/prof.js'


class Professor extends navigator(LitElement) {
    
    static get properties() {
        return {
            //id: { type: Integer },
            moduleProf: { type: Array },
<<<<<<< HEAD
            moduleProfTitle: { type: Array },
=======
>>>>>>> data
            moduleSWSv: { type: Array },
            moduleSWSue: { type: Array },
            moduleSWSp: { type: Array }
        };
    }

    constructor() {
        super();
        //this.id = null;
        this.moduleProf = [];
<<<<<<< HEAD
        this.moduleProfTitle = [];
=======
>>>>>>> data
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
<<<<<<< HEAD
        for (var prof in dataProf.professoren) {
            //id Vergleich aus dataSem des Profs und in dataProf!!!!!
            if (prof === 'professor1') {
                    this.moduleProfTitle.push(dataProf.professoren[prof].title);
            }
        }
=======
>>>>>>> data
    }
    
    render() {
        return html`
       <link rel="stylesheet" href="../src/styles/sem-detail.css">
       ${this.getModuleInfo()}
       

        <div class="professor div--style">
            ${this.moduleProf.map((i) => html`<h4>${i}</h4>`)} 
<<<<<<< HEAD
            ${this.moduleProfTitle.map((i) => html`<h4>${i}</h4>`)} 
            ${this.moduleSWSv.map((i) => html`<p>${i} SWS Vorlesung</p>`)} 
            ${this.moduleSWSue.map((i) => html`<p>${i}  SWS Übung</p>`)} 
            ${this.moduleSWSp.map((i) => html`<p>${i} SWS Übung</p>`)} 
=======
            ${this.moduleSWSv.map((i) => html`<p>${i} SWS Vorlesung</p>`)} 
            ${this.moduleSWSue.map((i) => html`<p>${i}  SWS Übung</p>`)} 
            ${this.moduleSWSp.map((i) => html`<p>${i} SWS Übung</p>`)} 
           <!-- <h4>Professor</h4>
            <p>4 SWS Vorlesung</p>
            <p>4 SWS Übung</p>
            <p>4 SWS Praktikum</p>-->
>>>>>>> data
        </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-professor', Professor);