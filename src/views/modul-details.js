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
    render() {
        return html`

       <!-- template content -->
       <studyguide-breadcrumb></studyguide-breadcrumb>
   <studyguide-headline></studyguide-headline>
    <studyguide-professor></studyguide-professor>
   <studyguide-exam></studyguide-exam>
    <studyguide-modulContent></studyguide-modulContent>
    <studyguide-returnButton></studyguide-returnButton>
    <studyguide-navigation></studyguide-navigation>
       `;
    }
}

customElements.define('studyguide-moduldetails', Semesterview);