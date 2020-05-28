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
        <link rel="stylesheet" href="../src/styles/font-style.css">
        <link rel="stylesheet" href="../src/styles/details.css">
        ${this.getProfTeaching()}
       
        <div class="teach detail detail-style detail-style-prof font-fam">
            <h4 class="font-weight-600 font-size-md">Lehre</h4>
            </br>
            ${this.profTeaching.map((i) => html`<p class="font-weight-300 font-size-s">${i}<br></p>`)}
        </div>

       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-teach', Teach);