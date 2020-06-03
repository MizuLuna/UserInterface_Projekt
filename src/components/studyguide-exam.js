import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import data from '../data/sem.js'

class Exam extends navigator(LitElement) {
    
    static get properties() {
        return {
            semesterId: { type: Number },
            courseId: { type: Number }
        };
    }

    getModuleCredit() {
        let moduleCredit = 0;
        if (this.semesterId && this.courseId) {
            const semester = data.find((semester) => semester.id === this.semesterId)
            const course = semester.modules.find((module) => module.id === this.courseId);
            moduleCredit = course.credits;
        }
        return moduleCredit
    }
   
    getModuleExam() {
        let moduleExam = "";
        if (this.semesterId && this.courseId) {
            const semester = data.find((semester) => semester.id === this.semesterId)
            const course = semester.modules.find((module) => module.id === this.courseId);
            moduleExam = course.exam;
        }
        return moduleExam
    }
    
    render() {
        const moduleExam = this.getModuleExam();
        const moduleCredit = this.getModuleCredit();

        return html`
        <link rel="stylesheet" href="../src/styles/font-style.css">
        <link rel="stylesheet" href="../src/styles/details.css">

        <div class="exam detail detail-style detail-style-sem font-fam">
            <h4 class="font-weight-600 font-size-md">Prüfung</h4>
            </br>
            <p class="font-weight-300 font-size-s">${moduleExam}</p>
            <p class="font-weight-300 font-size-s">${moduleCredit} Credits</p>
        </div>
       `;
    }
}

customElements.define('studyguide-exam', Exam);