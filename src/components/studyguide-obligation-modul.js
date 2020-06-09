import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import data from '../data/sem.js'


class Modul extends navigator(LitElement) {

    static get properties() {
        return {
            semesterId: { type: Number },
            courseId: { typpe: Number }
        };
    }

    constructor() {
        super();
        this.moduleNames = [];
    }

    getModules(modul) {
        if (modul) {
            return modul.modules.map((module, idx) => {             
                    return html`<div class="modul modul-style" @click=${() => this.clickHandler(this.semesterId, this.courseId, module.id)}>${module.name}</div>` 
            });
        } else {
            html``;
        }
    }

    render() {
        const semester = data.find((sem) => {
            return sem.id === this.semesterId;
        });
        const module = semester.modules.find((modul) => { 
            return modul.id == this.courseId;
        });
        
        return html`
        <link rel="stylesheet" href="../src/styles/font-style.css">
        <link rel="stylesheet" href="../src/styles/modul.css">
        <div class="modul-view font-fam font-size-md font-weight-600">
            ${this.getModules(module)}
        </div>
       `;
    }

    clickHandler(semesterId, moduleId, obligationId) {
            this.navigate(`/semesteruebersicht/semester/${semesterId}/modul/${moduleId}/obligation_modules/${obligationId}`); 
    }
}

customElements.define('studyguide-obligation-modul', Modul);