import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataSem from '../data/prof.js'

class Thesis extends navigator(LitElement) {
    render() {
        return html`
<<<<<<< Updated upstream
       <!-- template content -->
      <p class="farbe">THESIS</p>
=======
      
>>>>>>> Stashed changes
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-thesis', Thesis);