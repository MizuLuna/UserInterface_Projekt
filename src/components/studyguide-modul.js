import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataSem from '../data/sem.js'


class Modul extends navigator(LitElement) {
    render() {
        return html`
       <link rel="stylesheet" href="../src/styles/modul.css">
        <div class="modul-view">
            <div class="modul" @click=${this.clickHandler}>${dataSem.semester.semester1.modul1.name}</div>
            <div class="modul" @click=${this.clickHandler}>${dataSem.semester.semester1.modul2.name}</div> 
            <div class="modul" @click=${this.clickHandler}>${dataSem.semester.semester1.modul3.name}</div>
            <div class="modul" @click=${this.clickHandler}>${dataSem.semester.semester1.modul4.name}</div>
            <div class="modul" @click=${this.clickHandler}>${dataSem.semester.semester1.modul5.name}</div>
            <div class="modul" @click=${this.clickHandler}>${dataSem.semester.semester1.modul6.name}</div>
        </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-modul', Modul);