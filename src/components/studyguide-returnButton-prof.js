import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';


class Returnbutton extends navigator(LitElement) {
    render() {
        return html`
       <link rel="stylesheet" href="../src/styles/returnBtn-prof.css">
      
       <button class="return-Btn" @click=${this.clickHandler}>Zurück zur Übersicht</button>
       `;
    }

    //clickHandler(e) {
    //    this.navigate('/');
    //}
}

customElements.define('studyguide-returnbutton-prof', Returnbutton);