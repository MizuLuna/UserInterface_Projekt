import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
// import dataSem from '../data/sem.js'

class Square extends navigator(LitElement) {
    render() {
        return html`
       <link rel="stylesheet" href="../Styles/semesterview.css">
        
       <div class="square-view">
            <div class="square" @click="${this.clickHandler}>Semester 1</div>
            <div class="square" @click="${this.clickHandler}>Semester 2</div> 
            <div class="square" @click="${this.clickHandler}>Semester 3</div>
            <div class="square" @click="${this.clickHandler}>Semester 4</div>
            <div class="square" @click="${this.clickHandler}>Semester 5</div>
            <div class="square" @click="${this.clickHandler}>Semester 6</div>
            <div class="square" @click="${this.clickHandler}>Semester 7</div> 
            <div class="square" @click="${this.clickHandler}>Semester 8</div>
        </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-square', Square);