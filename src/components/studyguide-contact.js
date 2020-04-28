import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataSem from '../data/prof.js'

class Contact extends navigator(LitElement) {
    render() {
        return html`

       <!-- template content -->
      <p class="farbe">CONTACT</p>

       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-contact', Contact);