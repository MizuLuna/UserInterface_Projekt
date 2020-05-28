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
        <link rel="stylesheet" href="../src/styles/font-style.css">
        <link rel="stylesheet" href="../src/styles/details.css">
      ${this.getModuleContent()}

       <div class="modulContent detail detail-style detail-style-sem font-fam">
            <h4 class="font-weight-600 font-size-md">Inhalte</h4>
            </br>
            ${this.moduleContent.map((i) => html`<p class="font-weight-300 font-size-s">${i}</p>`)}   
        </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-modulcontent', Modulcontent);