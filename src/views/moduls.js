import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';

import '../components/studyguide-breadcrumb';
import '../components/studyguide-headline';
import '../components/studyguide-modul';
import '../components/studyguide-returnButton';
import '../components/studyguide-navigation';

class Semesterview extends navigator(LitElement) {
    render() {
        return html`

        <!--<studyguide-breadcrumb></studyguide-breadcrumb>-->
        <studyguide-headline></studyguide-headline>
        <studyguide-modul></studyguide-modul>
        <studyguide-returnButton @click=${this.clickHandler}></studyguide-returnButton>
        <studyguide-navigation></studyguide-navigation>
       `;
    }


    clickHandler(e) {
        this.navigate('/semesteruebersicht');
    }
}

customElements.define('studyguide-moduls', Semesterview);