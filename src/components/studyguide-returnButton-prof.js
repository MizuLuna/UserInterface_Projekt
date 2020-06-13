import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';


class Returnbutton extends navigator(LitElement) {
    render() {
        return html`
        <link rel="stylesheet" href="../src/styles/font-style.css">
        <link rel="stylesheet" href="../src/styles/returnBtn.css">
      
       <button class="return-Btn return-Btn-style return-Btn-prof font-fam font-size-md font-weight-600" @click=${this.clickHandler}>Zurück zur Übersicht</button>
       `;
    }
}

customElements.define('studyguide-returnbutton-prof', Returnbutton);