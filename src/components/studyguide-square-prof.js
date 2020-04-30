import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataProf from '../data/prof.js'

class Square extends navigator(LitElement) {
    render() {
        return html`
       <link rel="stylesheet" href="../src/styles/profview.css">
       <link rel="stylesheet" href="../src/styles/headline-prof.css">

       <h1 class="headline">Professoren</h1> 
       <div class="square-view">
            <div class="square" @click=${this.clickHandler}>${dataProf.professoren.professor1.name}</div>
            <div class="square" @click=${this.clickHandler}>${dataProf.professoren.professor2.name}</div> 
            <div class="square" @click=${this.clickHandler}>${dataProf.professoren.professor3.name}</div>
            <div class="square" @click=${this.clickHandler}>${dataProf.professoren.professor4.name}</div>
            <div class="square" @click=${this.clickHandler}>${dataProf.professoren.professor5.name}</div>
            <div class="square" @click=${this.clickHandler}>${dataProf.professoren.professor6.name}</div>
            <div class="square" @click=${this.clickHandler}>${dataProf.professoren.professor7.name}</div> 
            <div class="square" @click=${this.clickHandler}>${dataProf.professoren.professor8.name}</div>
            <div class="square" @click=${this.clickHandler}>${dataProf.professoren.professor9.name}</div>
            <div class="square" @click=${this.clickHandler}>${dataProf.professoren.professor10.name}</div>
        </div>

        <h1 class="headline">Mitarbeiter</h1>

        <div class="square-view">
            <div class="square" @click=${this.clickHandler}>${dataProf.dozenten.dozent1.name}</div>
            <div class="square" @click=${this.clickHandler}>${dataProf.dozenten.dozent2.name}</div> 
            <div class="square" @click=${this.clickHandler}>${dataProf.dozenten.dozent3.name}</div>
            <div class="square" @click=${this.clickHandler}>${dataProf.dozenten.dozent4.name}</div>
            <div class="square" @click=${this.clickHandler}>${dataProf.dozenten.dozent5.name}</div>
            <div class="square" @click=${this.clickHandler}>${dataProf.dozenten.dozent6.name}</div>
        </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesteruebersicht/semester/1/modul');
    }
}

customElements.define('studyguide-square-prof', Square);