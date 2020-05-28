
// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';


// Extend the LitElement base class
class Home extends navigator(LitElement) {
    static get properties() {
        return {
            href: { type: String }
        };
    }

    constructor() {
        super();
        this.href = '';
    }

    render() {
        return html`
        <!-- template content -->
            <p class="farbe">Welche Seite m�chten sie sehen?</p>
            <button @click="${this.clickHandler}">Semesteruebersicht</button>
            <button @click="${this.prof}">Profuebersicht</button>
       
        <!-- <button @click="${this.profdetail}">Profdetails</button>
            <button @click="${this.moduldetail}">moduldetails</button>
            <button @click="${this.modul}">module</button> -->
       `;
    }

    clickHandler(e) {
        this.navigate('/semesteruebersicht');
    }
    prof(e) {
        this.navigate('/professor_und_mitarbeiter');
    }
    profdetail(e) {
        this.navigate('/professor_und_mitarbeiter/1');
    }
    moduldetail(e) {
        this.navigate('/semesteruebersicht/semester/1/modul/1');
    }
    modul(e) {
        this.navigate('/semesteruebersicht/semester/1/modul');
    }
}
// Register the new element with the browser.
customElements.define('studyguide-home', Home);