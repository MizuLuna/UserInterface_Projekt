import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';

import '../components/studyguide-breadcrumb';
import '../components/studyguide-headline';
import '../components/studyguide-square';
import '../components/studyguide-navigation';

class Semesterview extends navigator(LitElement) {
    render() {
        return html`
        <!--<studyguide-breadcrumb></studyguide-breadcrumb>-->
        <studyguide-headline></studyguide-headline>
        <studyguide-square></studyguide-square>
        <studyguide-navigation></studyguide-navigation>
       `;
    }
}

customElements.define('studyguide-semester', Semesterview);