import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import './semesterview/overview/sem-overview';


class Navigation extends navigator(LitElement) {
    render() {
        return html`
       <link rel="stylesheet" href="style.css">
       <!-- template content -->
      <p class="farbe">hello world</p>
      <button @click="${this.clickHandler}">click</button>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-navigation', Navigation);