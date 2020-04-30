import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataSem from '../data/prof.js'

class Picture extends navigator(LitElement) {
    render() {
        return html`
       <!--<link rel="stylesheet" href="../src/styles/picture.css">-->
       
       <img src="">
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-picture', Picture);