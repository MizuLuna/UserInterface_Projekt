import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataProf from '../data/prof.js'

class Square extends navigator(LitElement) {
    render() {
        return html`
       <link rel="stylesheet" href="../src/styles/semesterview.css">
        
       <div class="square-view">
            <div class="square" @click=${this.clickHandler}>${dataProf.professoren.Professor1.name}</div>
            <div class="square" @click=${this.clickHandler}>${dataProf.professoren.Professor2.name}</div> 
            <div class="square" @click=${this.clickHandler}>${dataProf.professoren.Professor3.name}</div>
            <div class="square" @click=${this.clickHandler}>${dataProf.professoren.Professor4.name}</div>
            <div class="square" @click=${this.clickHandler}>${dataProf.professoren.Professor5.name}</div>
            <div class="square" @click=${this.clickHandler}>${dataProf.professoren.Professor6.name}</div>
            <div class="square" @click=${this.clickHandler}>${dataProf.professoren.Professor7.name}</div> 
            <div class="square" @click=${this.clickHandler}>${dataProf.professoren.Professor8.name}</div>
            <div class="square" @click=${this.clickHandler}>${dataProf.professoren.Professor9.name}</div>
            <div class="square" @click=${this.clickHandler}>${dataProf.professoren.Professor10.name}</div>
        </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesteruebersicht/semester/1/modul');
    }
}

customElements.define('studyguide-square', Square);