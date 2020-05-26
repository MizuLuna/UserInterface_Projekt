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
            <link rel="stylesheet" href="../src/styles/profview.css">
            <link rel="stylesheet" href="../src/styles/headline-prof.css">
       
            ${this.getProfName()}
       
                <h1 class="headline">Professoren</h1><br> 
             
            <div class="square-view">   
                ${this.profName.map((i) => html`<div class="square" @click=${this.clickHandler}>${i} </div><br>`)}
                </div>
                <h1 class="headline">Mitarbeiter</h1><br> 
                <div class="square-view">
                ${this.dozName.map((i) => html`<div class="square" @click=${this.clickHandler}>${i} </div>`)}
            </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/professor_und_mitarbeiter/1');
    }
}

customElements.define('studyguide-square-prof', Square);