import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataProf from '../data/prof.js'

class Square extends navigator(LitElement) {
    
    static get properties() {
        return {
            //id: { type: Integer },
            profName: { type: Array },
            dozName: { type: Array }
        };
    }

    constructor() {
        super();
        //this.id = null;
        this.profName= [];
        this.dozName= [];
    }

     getProfName() {
         //var semester = 'semester' + this.id;
         for (var prof in dataProf.professoren) {     
                     this.profName.push(dataProf.professoren[prof].name);            
         }
         for (var doz in dataProf.dozenten) {     
            this.dozName.push(dataProf.dozenten[doz].name);            
}
     }
    
    render() {
        return html`
            <link rel="stylesheet" href="../src/styles/font-style.css">
            <link rel="stylesheet" href="../src/styles/squares.css">
            <link rel="stylesheet" href="../src/styles/headline.css">
       
            ${this.getProfName()}
       
            <h1 class="headline headline-prof font-fam font-size-lg font-weight-600">Professoren</h1><br>  
            <div class="square-view">   
                ${this.profName.map((i) => html`<div class="square square-style square-style-prof font-fam font-size-md font-weight-600" @click=${this.clickHandler}>${i} </div><br>`)}
            </div>
            </br>
            </br>
            <h1 class="headline headline-prof font-fam font-size-lg font-weight-600">Mitarbeiter</h1><br> 
            <div class="square-view font-fam font-size-md font-weight-600">
                ${this.dozName.map((i) => html`<div class="square square-style square-style-prof" @click=${this.clickHandler}>${i} </div>`)}
            </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/professor_und_mitarbeiter/1');
    }
}

customElements.define('studyguide-square-prof', Square);