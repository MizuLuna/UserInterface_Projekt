import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';

import '../components/studyguide-breadcrumb-prof';
import '../components/studyguide-headline-prof';
import '../components/studyguide-picture';
import '../components/studyguide-contact';
import '../components/studyguide-teach';
//import '../components/studyguide-thesis';
import '../components/studyguide-returnButton-prof';
import '../components/studyguide-navigation';

class Semesterview extends navigator(LitElement) {
    static get properties() {
        return {
            profId: { type: Number }
        };
    }

    constructor() {
        super();
        this.params = {};
    }

    render() {
        return html`
   
        <!--<studyguide-breadcrumb-prof></studyguide-breadcrumb-prof>-->
        <studyguide-headline-prof profId="${this.profId}"></studyguide-headline-prof>
        <studyguide-picture profId="${this.profId}"></studyguide-picture>
        <studyguide-contact profId="${this.profId}"></studyguide-contact>
        <studyguide-teach profId="${this.profId}"></studyguide-teach>
            <!--<studyguide-thesis profId="${this.profId}"></studyguide-thesis>-->
        <studyguide-returnButton-prof @click=${this.clickHandler}></studyguide-returnButton-prof>
        <studyguide-navigation></studyguide-navigation>
       `;
    }


    clickHandler(e) {
        this.navigate('/professor_und_mitarbeiter');
    }
}

customElements.define('studyguide-profdetails', Semesterview);