import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataSem from '../data/prof.js'

class Teach extends navigator(LitElement) {
    render() {
        return html`
        <link rel="stylesheet" href="../src/styles/prof-detail.css">

        <div class="teach div--style">
            <h4>Lehre</h4>
            <p>abc</p>
        </div>

       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-teach', Teach);