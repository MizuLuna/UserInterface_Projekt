import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataSem from '../data/prof.js'

class Thesis extends navigator(LitElement) {
    render() {
        return html`
        <link rel="stylesheet" href="../src/styles/font-style.css">
        <link rel="stylesheet" href="../src/styles/details.css">

        <div class="thesis detail detail-style detail-style-prof font-fam">
            <h4 class="font-weight-600 font-size-md">Thesenthemen</h4>
            </br>
            <p class="font-weight-300 font-size-s">a</p>
            <p class="font-weight-300 font-size-s">b</p>
            <p class="font-weight-300 font-size-s">c</p>  
        </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-thesis', Thesis);