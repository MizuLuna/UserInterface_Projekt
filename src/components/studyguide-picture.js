import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataSem from '../data/prof.js'

class Picture extends navigator(LitElement) {
    render() {
        return html`
<<<<<<< Updated upstream
       <link rel="stylesheet" href="style.css">
       <!-- template content -->
      <p class="farbe">PICTURE</p>
=======
      
>>>>>>> Stashed changes
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-picture', Picture);