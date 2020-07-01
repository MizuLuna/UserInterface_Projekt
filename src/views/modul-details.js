import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';

import '../components/studyguide-breadcrumb';
import '../components/studyguide-modul-headline';
import '../components/studyguide-professor';
import '../components/studyguide-exam';
import '../components/studyguide-modulContent';
import '../components/studyguide-internship';
import '../components/studyguide-returnButton';
import '../components/studyguide-navigation';

class Semesterview extends navigator(LitElement) {

    static get properties() {
        return {
            semesterId: { type: Number },
            courseId: { type: Number }
        };
    }

    constructor() {
        super();
        this.params = {};
    }

    render() {

        return html`
        <studyguide-modul-headline semesterId="${this.semesterId}" courseId="${this.courseId}"></studyguide-modul-headline>
        <studyguide-professor semesterId="${this.semesterId}" courseId="${this.courseId}"></studyguide-professor>
        <studyguide-exam semesterId="${this.semesterId}" courseId="${this.courseId}"></studyguide-exam>
        <studyguide-modulContent semesterId="${this.semesterId}" courseId="${this.courseId}"></studyguide-modulContent>
        <studyguide-returnButton semesterId="${this.semesterId}"></studyguide-returnButton>
        <studyguide-navigation></studyguide-navigation>
       `;
    }
}

customElements.define('studyguide-moduldetails', Semesterview);