
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
       <link rel="stylesheet" href="style.css">
       <!-- template content -->
      <p class="farbe">hello world</p>
      <button @click="${this.clickHandler}">click</button>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesteruebersicht');
    }
}
// Register the new element with the browser.
customElements.define('studyguide-home', Home);