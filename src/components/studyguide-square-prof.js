import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataProf from '../data/prof.js'

class Square extends navigator(LitElement) {
    
    static get properties() {
        return {
            profName: { type: Array },
            dozName: { type: Array }
        };
    }

    constructor() {
        super();
        this.profs= [];
        this.dozenten= [];
    }

     getInfos() {
         for (var prof in dataProf.professoren) {     
                     this.profs.push(dataProf.professoren[prof]);            
         }
         for (var doz in dataProf.dozenten) {     
            this.dozenten.push(dataProf.dozenten[doz]);            
}
     }
    
    render() {
        return html`
            <link rel="stylesheet" href="../src/styles/font-style.css">
            <link rel="stylesheet" href="../src/styles/squares.css">
            <link rel="stylesheet" href="../src/styles/headline.css">
       
            ${this.getInfos()}
       
            <h1 class="headline headline-prof font-fam font-size-lg font-weight-600">Professoren</h1><br>  
            <div class="square-view">   
                ${this.profs.map((prof) => html`<div class="square square-style square-style-prof font-fam font-size-md font-weight-600" @click=${() => this.clickHandler(prof.id)}>${prof.infos.name} </div><br>`)}
            </div>
            <br>
            <br>
            <h1 class="headline headline-prof font-fam font-size-lg font-weight-600">Mitarbeiter</h1><br> 
            <div class="square-view font-fam font-size-md font-weight-600">
                ${this.dozenten.map((dozent) => html`<div class="square square-style square-style-prof" @click=${() => this.clickHandler(dozent.id)}>${dozent.infos.name} </div>`)}
            </div>
       `;
    }

    clickHandler(profId) {
        this.navigate(`/professor_und_mitarbeiter/${profId}`);
    }
}

customElements.define('studyguide-square-prof', Square);