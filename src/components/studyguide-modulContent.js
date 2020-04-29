import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataSem from '../data/sem.js'

class Modulcontent extends navigator(LitElement) {
    render() {
        return html`
       <link rel="stylesheet" href="../src/styles/sem-detail.css">
      
       <div class="modulContent div--style">
            <h4>Inhalte</h4>
            <p>lineare Algebra</p>
            <p>lineare Algebra</p>
            <p>lineare Algebra</p>
            <p>lineare Algebra</p>  
        </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-modulcontent', Modulcontent);