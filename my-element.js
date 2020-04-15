// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import './semesterview/overview/sem-overview';

// Extend the LitElement base class
class MyElement extends navigator(LitElement) {
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
// Register the new element with the browser.
customElements.define('my-element', MyElement);

