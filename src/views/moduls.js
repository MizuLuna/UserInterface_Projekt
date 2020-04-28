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

       <!-- template content -->
<studyguide-breadcrumb></studyguide-breadcrumb>
<studyguide-headline></studyguide-headline>
<studyguide-modul></studyguide-modul>
<studyguide-returnButton></studyguide-returnButton>
<studyguide-navigation></studyguide-navigation>
       `;
    }
}

customElements.define('studyguide-moduls', Semesterview);