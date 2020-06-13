import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import data from '../data/sem.js'

class Headline extends navigator(LitElement) {

    static get properties() {
        return {
            semesterId: {type: Number},
            courseId: { type: Number },
        };
    }

    getModulName() {
        let modulName = "";
        if (this.semesterId && this.courseId) {
            const semester = data.find((semester) => semester.id === this.semesterId);
            const course = semester.modules.find((module) => module.id === this.courseId);
            modulName = course.infos.name;
        }
        return modulName;
    }

    render() {
        const modulName = this.getModulName();

        return html`
        <link rel="stylesheet" href="../src/styles/font-style.css">
        <link rel="stylesheet" href="../src/styles/headline.css">

        <h1 class="headline headline-sem font-fam font-size-lg font-weight-600">${modulName}</h1>
       `;
    }
}

customElements.define('studyguide-modul-headline', Headline);