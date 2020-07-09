import { LitElement, css, html } from 'lit-element';
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

    static get styles() {
        return css`
            .font-fam{
                font-family: 'Fira Sans', sans-serif;
            } 
            
            .font-size-md{
                font-size: 1.6rem;
            } 

            .font-weight-600{
                font-weight: 600;
            }

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
        `;
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
        <div class="modul-view font-fam font-size-md font-weight-600">
            ${this.getModules(semester)}
        </div>
       `;
    }

    clickHandler(semesterId, moduleId) {
        if ((semesterId === 6) && (moduleId === 6)) {
            this.navigate(`/semesteruebersicht/semester/${semesterId}/modul/${moduleId}/obligation_modules`);
        } else {
            this.navigate(`/semesteruebersicht/semester/${semesterId}/modul/${moduleId}`);
        }
    }
}

customElements.define('studyguide-modul', Modul);