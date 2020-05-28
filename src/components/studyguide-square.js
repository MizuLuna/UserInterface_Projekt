import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';

class Square extends navigator(LitElement) {
    render() {
        return html`
        <link rel="stylesheet" href="../src/styles/font-style.css">
        <link rel="stylesheet" href="../src/styles/squares.css">
        
        <div class="square-view font-fam font-size-md font-weight-600">
            <div class="square square-style square-style-sem" @click=${this.clickHandler}>Semester 1</div>
            <div class="square square-style square-style-sem" @click=${this.clickHandler}>Semester 2</div> 
            <div class="square square-style square-style-sem" @click=${this.clickHandler}>Semester 3</div>
            <div class="square square-style square-style-sem" @click=${this.clickHandler}>Semester 4</div>
            <div class="square square-style square-style-sem" @click=${this.clickHandler}>Semester 5</div>
            <div class="square square-style square-style-sem" @click=${this.clickHandler}>Semester 6</div>
            <div class="square square-style square-style-sem" @click=${this.clickHandler}>Semester 7</div> 
            <div class="square square-style square-style-sem" @click=${this.clickHandler}>Master</div>
        </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesteruebersicht/semester/1/modul');
    }
}

customElements.define('studyguide-square', Square);