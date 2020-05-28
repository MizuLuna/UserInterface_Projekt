import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataProf from '../data/prof.js'

class Headline extends navigator(LitElement) {
    
    static get properties() {
        return {
            //id: { type: Integer },
            profName: { type: Array },
            profTitle: { type: Array }
        };
    }

    constructor() {
        super();
        //this.id = null;
        this.profName= [];
        this.profTitle= [];
    }

     getProfName() {
         //var semester = 'semester' + this.id;
         for (var prof in dataProf.professoren) {
             if (prof === 'professor1') {
                     this.profTitle.push(dataProf.professoren[prof].title);
                     this.profName.push(dataProf.professoren[prof].name);
             }
         }
     }
    
    render() {
        return html`
        <link rel="stylesheet" href="../src/styles/font-style.css">
        <link rel="stylesheet" href="../src/styles/headline.css">
        ${this.getProfName()}
 
        ${this.profTitle.map((i) => html`<h1 class="headline headline-prof font-fam font-size-md font-weight-600"> ${i}</h1>`)}
        ${this.profName.map((i) => html`<h1 class="headline headline-prof font-fam font-size-md font-weight-600"> ${i}</h1>`)}
       `;
    }
}

customElements.define('studyguide-headline-prof', Headline);