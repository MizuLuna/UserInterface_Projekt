import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';

class Profdetails extends navigator(LitElement) {
    render() {
        return html`
       <link rel="stylesheet" href="style.css">
       <!-- template content -->
      <p class="farbe">Semesterview</p>
      <button @click="${this.clickHandler}">click</button>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-profdetails', Profdetails);