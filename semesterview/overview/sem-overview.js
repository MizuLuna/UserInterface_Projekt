// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class Element extends LitElement {
  render(){
    return html`
      <!-- template content -->
      <p>Semester overview</p>
    `;
  }
}
// Register the new element with the browser.
customElements.define('my-element2', Element);

