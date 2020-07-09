import { LitElement, css, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import data from '../data/sem.js'

class Headline extends navigator(LitElement) {

    static get properties() {
        return {
            semesterId: {type: Number},
            courseId: { type: Number }
        };
    }

    static get styles() {
        return css `
            .font-fam{
                font-family: 'Fira Sans', sans-serif;
            } 
            
            .font-size-lg{
                font-size: 3rem;
            }

            .font-weight-600{
                font-weight: 600;
            }

            .headline{
                margin-left: 10vw;
                margin-top: 5%;
                margin-block-end: 0em;
            }

            .headline-sem{
                color: #00b1db;
            }

            *{
                box-sizing: border-box;
            }

            body{
                margin: 0;
            }
        `;
    }

    getSemesterName() {
        let semesterName = "";
        if (this.semesterId && (this.semesterId === 6) && this.courseId && (this.courseId === 6)) {
            const semester = data.find((semester) => semester.id === this.semesterId);
            const course = semester.modules.find((module) => module.id === this.courseId);
            semesterName = course.name;
        } else if (this.semesterId) {
            const semester = data.find((semester) => semester.id === this.semesterId);
            semesterName = "Semester " + semester.id;
        }
        return semesterName;
    }

    render() {
        const semesterName = this.getSemesterName();

        return html`
            <h1 class="headline headline-sem font-fam font-size-lg font-weight-600">${semesterName}</h1>
       `;
    }
}

customElements.define('studyguide-semester-headline', Headline);