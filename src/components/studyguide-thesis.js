import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataSem from '../data/prof.js'

class Thesis extends navigator(LitElement) {
    render() {
        return html`
       <!-- template content -->
      <p class="farbe">THESIS</p>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-thesis', Thesis);