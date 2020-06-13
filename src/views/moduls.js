import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';

import '../components/studyguide-breadcrumb';
import '../components/studyguide-modul-headline';
import '../components/studyguide-modul';
import '../components/studyguide-internship';
import '../components/studyguide-returnButton';
import '../components/studyguide-navigation';

class Semesterview extends navigator(LitElement) {

    static get properties() {
        return {
            semesterId: { type: Number }
        };
    }

    render() {
        //L�dt bei Sem5 die Styles nicht mehr (auch return und navigation styles)
        if (this.semesterId === 5) {
            return html`
            <studyguide-internship semesterId="${this.semesterId}"></studyguide-internship>
            <studyguide-returnButton @click=${this.clickHandler}></studyguide-returnButton>
            <studyguide-navigation></studyguide-navigation>
           `;
        } else {
            return html`
            <studyguide-modul semesterId="${this.semesterId}"></studyguide-modul>
            <studyguide-returnButton @click=${this.clickHandler}></studyguide-returnButton>
            <studyguide-navigation></studyguide-navigation>
           `;
        }

        
    }


    clickHandler(e) {
        this.navigate('/semesteruebersicht');
    }
}

customElements.define('studyguide-moduls', Semesterview);