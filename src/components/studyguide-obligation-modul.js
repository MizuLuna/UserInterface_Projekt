import { LitElement, css, html } from 'lit-element';
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

    static get styles() {
        return css`
        *{
            box-sizing: border-box;
        }

        body{
            margin: 0;
        }
        .modul-view{
            width:80%;
            margin-left:10%;
        }       

        .modul{
            width: 100%;
            max-width: 500px; 
            padding: 15px;
            margin-top: 1.5rem; 
        }

        .modul-style{
            text-align: center;
            box-shadow: 10px 9px 16px 1px rgba(0,0,0,0.16);
            border: 1px solid #00b1db;
            border-radius: 7px;
            background-color: #f2f2f2;
            color: #666666; 
        }

        .font-fam{
            font-family: 'Fira Sans', sans-serif;
        }

        .font-size-md{
            font-size: 1.6rem;
        }
        
        .font-weight-600{
            font-weight: 600;
        }
        `;
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