import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataSem from '../data/prof.js'

/*
 * placeholder picture
 */

class Picture extends navigator(LitElement) {
    render() {
        return html`
        <link rel="stylesheet" href="../src/styles/picture.css">
       
            <div class="picture-pos"> 
                <img src="../src/img/picture.png">
            </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-picture', Picture);