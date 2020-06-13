import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';

import '../components/studyguide-breadcrumb-prof';
import '../components/studyguide-headline-prof';
import '../components/studyguide-square-prof';
import '../components/studyguide-navigation';

class Semesterview extends navigator(LitElement) {
    render() {
        return html`
        <studyguide-square-prof></studyguide-square-prof>
        <studyguide-navigation></studyguide-navigation>
       `;
    }

}

customElements.define('studyguide-prof', Semesterview);