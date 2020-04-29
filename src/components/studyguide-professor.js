import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataSem from '../data/sem.js'


class Professor extends navigator(LitElement) {
    render() {
        return html`
       <link rel="stylesheet" href="../src/styles/sem-detail.css">
       
        <div class="professor div--style">
            <h4>Professor</h4>
            <p>4 SWS Vorlesung</p>
            <p>4 SWS Übung</p>
            <p>4 SWS Praktikum</p>
        </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-professor', Professor);