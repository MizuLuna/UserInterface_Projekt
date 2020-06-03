import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';

import '../components/studyguide-breadcrumb';
import '../components/studyguide-headline';
import '../components/studyguide-modul';
import '../components/studyguide-internship';
import '../components/studyguide-returnButton';
import '../components/studyguide-navigation';

class Semesterview extends navigator(LitElement) {

    static get properties() {
        return {
            semesterId: { type: Number },
            courseId: {type: Number}
        };
    }

    render() {
        return html`
            <!--<studyguide-breadcrumb></studyguide-breadcrumb>-->
            <studyguide-headline></studyguide-headline>
            <studyguide-modul semesterId="${this.semesterId}" courseId="${this.courseId}"></studyguide-modul>
            <studyguide-returnButton @click=${this.clickHandler}></studyguide-returnButton>
            <studyguide-navigation></studyguide-navigation>
           `;
    }

    clickHandler(e) {
        this.navigate('/semesteruebersicht/semester/6/modul');
    }
}
customElements.define('studyguide-obligation-modules', Semesterview);