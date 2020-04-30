import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataSem from '../data/sem.js'

class Modulcontent extends navigator(LitElement) {
   
    static get properties() {
        return {
            //id: { type: Integer },
            moduleContent: { type: Array }
        };
    }

    constructor() {
        super();
        //this.id = null;
        this.moduleContent = [];
    }
   
    getModuleContent() {
        //var semester = 'semester' + this.id;
        for (var sem in dataSem.semester) {
            if (sem === 'semester1') {
                for (var modul in dataSem.semester[sem]) {
                    if (modul === 'modul1') {
                        this.moduleContent.push(dataSem.semester[sem][modul].content);
                    }
                }
            }
        }
    }
   
    render() {
        return html`
       <link rel="stylesheet" href="../src/styles/sem-detail.css">
      
       <div class="modulContent div--style">
            <h4>Inhalte</h4>
            ${this.getModuleContent()}
            ${this.moduleContent.map((i) => html`<p>${i}</p>`)}   
        </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-modulcontent', Modulcontent);