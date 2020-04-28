import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';


class Headline extends navigator(LitElement) {
    render() {
        return html`
        <link rel="stylesheet" href="../src/styles/headline.css">

        <h1 class="headline">HEADLINE</h1>
       `;
    }
}

customElements.define('studyguide-headline', Headline);