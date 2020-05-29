import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import data from '../data/sem.js'

class Modulcontent extends navigator(LitElement) {
   
    static get properties() {
        return {
            semesterId: { type: Number },
            courseId: { type: Number }
        };
    }
   
    getModuleContent() {
        let moduleContent = [];
        if(this.semesterId && this.courseId) {
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
                </br>
                ${moduleContent.map((i) => html`<p class="font-weight-300 font-size-s">${i}</p>`)}   
            </div>
       `;
    }
}

customElements.define('studyguide-modulcontent', Modulcontent);