import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';

import '../components/studyguide-breadcrumb';
import '../components/studyguide-headline';
import '../components/studyguide-picture';
import '../components/studyguide-contact';
import '../components/studyguide-teach';
import '../components/studyguide-thesis';
import '../components/studyguide-returnButton';
import '../components/studyguide-navigation';

class Semesterview extends navigator(LitElement) {
    render() {
        return html`
   
       <!-- template content -->
       <studyguide-breadcrumb></studyguide-breadcrumb>
   <studyguide-headline></studyguide-headline>
    <studyguide-picture></studyguide-picture>
   <studyguide-contact></studyguide-contact>
    <studyguide-teach></studyguide-teach>
    <studyguide-thesis></studyguide-thesis>
    <studyguide-returnButton></studyguide-returnButton>
    <studyguide-navigation></studyguide-navigation>
       `;
    }

}

customElements.define('studyguide-profdetails', Semesterview);