import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';

class Square extends navigator(LitElement) {
    render() {
        return html`
        <link rel="stylesheet" href="../src/styles/font-style.css">
        <link rel="stylesheet" href="../src/styles/squares.css">
        
        <div class="square-view font-fam font-size-md font-weight-600">
            <div class="square square-style square-style-sem" @click=${() => this.clickHandler(1)}>Semester 1</div>
            <div class="square square-style square-style-sem" @click=${() => this.clickHandler(2)}>Semester 2</div> 
            <div class="square square-style square-style-sem" @click=${() => this.clickHandler(3)}>Semester 3</div>
            <div class="square square-style square-style-sem" @click=${() => this.clickHandler(4)}>Semester 4</div>
            <div class="square square-style square-style-sem" @click=${() => this.clickHandler(5)}>Semester 5</div>
            <div class="square square-style square-style-sem" @click=${() => this.clickHandler(6)}>Semester 6</div>
            <div class="square square-style square-style-sem" @click=${() => this.clickHandler(7)}>Semester 7</div> 
            <div class="square square-style square-style-sem" @click=${() => this.clickHandler(1)}>Master</div>
        </div>
       `;
    }

    clickHandler(semesterId) {
        this.navigate(`/semesteruebersicht/semester/${semesterId}/modul`);
    }
}

customElements.define('studyguide-square', Square);