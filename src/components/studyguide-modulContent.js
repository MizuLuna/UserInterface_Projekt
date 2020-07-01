import { LitElement, css, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import data from '../data/sem.js'

class Modulcontent extends navigator(LitElement) {
   
    static get properties() {
        return {
            semesterId: { type: Number },
            courseId: { type: Number },
            obligationId: {type: Number}
        };
    }

    static get styles() {
        return css`
            li { 
                color: #666666;     
            }       
        `;
      }
   
    getModuleContent() {
        let moduleContent = [];
        if (this.semesterId && this.courseId && this.obligationId && (this.semesterId === 6) && (this.courseId === 6)) {
            const semester = data.find((semester) => semester.id === this.semesterId)
            const course = semester.modules.find((module) => module.id === this.courseId);
            const modul = course.modules.find((module) => module.id === this.obligationId);
            moduleContent = modul.content;
        } else if (this.semesterId && this.courseId && !this.obligationId) {
            const semester = data.find((semester) => semester.id === this.semesterId)
            const course = semester.modules.find((module) => module.id === this.courseId);
            moduleContent = course.content;
        }
        return moduleContent
    }
   
    render() {

        const moduleContent = this.getModuleContent();

        return html`
            <link rel="stylesheet" href="../src/styles/font-style.css">
            <link rel="stylesheet" href="../src/styles/details.css">
            <div class="modulContent detail detail-style detail-style-sem font-fam">
                <h4 class="font-weight-600 font-size-md">Inhalte</h4>
                
                ${moduleContent.map((i) => html`
                <ul>
                    <li class="font-weight-300 font-size-s">${i}</li>
                </ul>
                `)}   
            </div>
       `;
    }
}

customElements.define('studyguide-modulcontent', Modulcontent);