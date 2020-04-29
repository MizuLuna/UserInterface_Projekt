import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataSem from '../data/prof.js'

class Contact extends navigator(LitElement) {
    render() {
        return html`
        <link rel="stylesheet" href="../src/styles/prof-detail.css">

        <div class="professor div--style">
            <h4>Kontakt</h4>
            <p>Haus</p>
            <p>tel</p>
            <p>mail</p>
        </div>

       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-contact', Contact);