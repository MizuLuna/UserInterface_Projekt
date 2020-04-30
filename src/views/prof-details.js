import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';

import '../components/studyguide-breadcrumb-prof';
import '../components/studyguide-headline-prof';
import '../components/studyguide-picture';
import '../components/studyguide-contact';
import '../components/studyguide-teach';
import '../components/studyguide-thesis';
import '../components/studyguide-returnButton-prof';
import '../components/studyguide-navigation';

class Semesterview extends navigator(LitElement) {
    render() {
        return html`
   
       <!-- template content -->
       <studyguide-breadcrumb-prof></studyguide-breadcrumb-prof>
   <studyguide-headline-prof></studyguide-headline-prof>
    <studyguide-picture></studyguide-picture>
   <studyguide-contact></studyguide-contact>
    <studyguide-teach></studyguide-teach>
    <studyguide-thesis></studyguide-thesis>
    <studyguide-returnButton-prof></studyguide-returnButton-prof>
    <studyguide-navigation></studyguide-navigation>
       `;
    }

}

customElements.define('studyguide-profdetails', Semesterview);