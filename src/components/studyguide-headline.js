import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';


class Headline extends navigator(LitElement) {


    render() {
        return html`
        <link rel="stylesheet" href="../src/styles/font-style.css">
        <link rel="stylesheet" href="../src/styles/headline.css">

        <h1 class="headline headline-sem font-fam font-size-lg font-weight-600">Semesterübersicht</h1>
       `;
    }
}

customElements.define('studyguide-headline', Headline);