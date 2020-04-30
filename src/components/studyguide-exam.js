import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataSem from '../data/sem.js'

class Exam extends navigator(LitElement) {
    
    static get properties() {
        return {
            //id: { type: Integer },
            moduleExam: { type: Array },
            moduleCredit: { type: Array }
        };
    }

    constructor() {
        super();
        //this.id = null;
        this.moduleExam = [];
        this.moduleCredit = [];
    }
   
    getModuleExam() {
        //var semester = 'semester' + this.id;
        for (var sem in dataSem.semester) {
            if (sem === 'semester1') {
                for (var modul in dataSem.semester[sem]) {
                    if (modul === 'modul1') {
                        this.moduleExam.push(dataSem.semester[sem][modul].exam);
                        this.moduleCredit.push(dataSem.semester[sem][modul].credits);
                    }
                }
            }
        }
    }
    
    render() {
        return html`
       <link rel="stylesheet" href="../src/styles/sem-detail.css">
       
        <div class="exam div--style">
            <h4>Prüfung</h4>
            ${this.getModuleExam()}
            ${this.moduleExam.map((i) => html`<p>${i}</p>`)} 
            ${this.moduleCredit.map((i) => html`<p>${i} Credits</p>`)} 
        </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-exam', Exam);