import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';

import '../components/studyguide-breadcrumb';
import '../components/studyguide-modul-headline';
import '../components/studyguide-obligation-modul';
import '../components/studyguide-returnButton';
import '../components/studyguide-navigation';

class Semesterview extends navigator(LitElement) {

    static get properties() {
        return {
            semesterId: { type: Number },
            courseId: {type: Number}
        };
    }

    //semesterId und courseId scheinen probleme zu geben (feste 6 geht) -> dann probleme bei der Map in der n�chsten view mit content/SWS etc
    render() {
        return html`
            <studyguide-obligation-modul semesterId="${this.semesterId}" courseId="${this.courseId}"></studyguide-obligation-modul>
            <studyguide-returnButton @click=${this.clickHandler}></studyguide-returnButton>
            <studyguide-navigation></studyguide-navigation>
           `;
    }

    clickHandler(e) {
        this.navigate('/semesteruebersicht/semester/6/modul');
    }
}
customElements.define('studyguide-obligation-moduls', Semesterview);