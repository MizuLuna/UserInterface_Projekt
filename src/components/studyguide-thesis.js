import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataSem from '../data/prof.js'

class Thesis extends navigator(LitElement) {
    render() {
        return html`
        <link rel="stylesheet" href="../src/styles/prof-detail.css">

        <div class="thesis div--style">
            <h4>Thesenthemen</h4>
            <p>a</p>
            <p>b</p>
            <p>c</p>  
        </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-thesis', Thesis);