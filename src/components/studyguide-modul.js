import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import data from '../data/sem.js'


class Modul extends navigator(LitElement) {

    static get properties() {
        return {
            semesterId: { type: Number }
        };
    }

    constructor() {
        super();
        this.moduleNames = [];
    }

    getModules(semester) {
        if (semester) {
            return semester.modules.map((module, idx) => {
                return html`<div class="modul modul-style" @click=${() => this.clickHandler(semester.id, module.id)}>${module.name}</div>`
            });
        } else {
            html``;
        }
    }

    render() {

        const semester = data.find((semester) => {
            return semester.id === this.semesterId;
        });

        return html`
        <link rel="stylesheet" href="../src/styles/font-style.css">
        <link rel="stylesheet" href="../src/styles/modul.css">
        <div class="modul-view font-fam font-size-md font-weight-600">
            ${this.getModules(semester)}
        </div>
       `;
    }

    clickHandler(semesterId, moduleId) {
        this.navigate(`/semesteruebersicht/semester/${semesterId}/modul/${moduleId}`);
    }
}

customElements.define('studyguide-modul', Modul);