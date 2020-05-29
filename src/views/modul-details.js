import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';

import '../components/studyguide-breadcrumb';
import '../components/studyguide-headline';
import '../components/studyguide-professor';
import '../components/studyguide-exam';
import '../components/studyguide-modulContent';
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

        const semesterId = this.semesterId;

        return html`

        <!--<studyguide-breadcrumb></studyguide-breadcrumb>-->
        <studyguide-headline></studyguide-headline>
        <studyguide-professor></studyguide-professor>
        <studyguide-exam></studyguide-exam>
        <studyguide-modulContent semesterId="${this.semesterId}" courseId="${this.courseId}"></studyguide-modulContent>
        <studyguide-returnButton semesterId="${this.semesterId}"></studyguide-returnButton>
        <studyguide-navigation></studyguide-navigation>
       `;
    }
}

customElements.define('studyguide-moduldetails', Semesterview);