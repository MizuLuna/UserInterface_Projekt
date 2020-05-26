import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataProf from '../data/prof.js'

class Teach extends navigator(LitElement) {
    
    static get properties() {
        return {
            //id: { type: Integer },
            profTeaching: { type: Array }
        };
    }

    constructor() {
        super();
        //this.id = null;
        this.profTeaching= [];
    }

     getProfTeaching() {
         //var semester = 'semester' + this.id;
         for (var prof in dataProf.professoren) {
             if (prof === 'professor1') {
                     this.profTeaching.push(dataProf.professoren[prof].teaching);
             }
         }
     }
    
    render() {
        return html`
        <link rel="stylesheet" href="../src/styles/prof-detail.css">
        ${this.getProfTeaching()}
        <div class="teach div--style">
            <h4>Lehre</h4>
            ${this.profTeaching.map((i) => html`<p>${i}<br></p>`)}
        </div>

       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-teach', Teach);