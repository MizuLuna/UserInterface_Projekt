import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';


class Navigation extends navigator(LitElement) {
    render() {
        return html`
       <link rel="stylesheet" href="navigation.css">
      
       <div class="nav-bottom">
       <div class="item-sem item-pos" ${this.clickHandler}>Semesterübersicht</div>
       <div class="item-prof item-pos" ${this.clickHandler}>Professoren und Mitarbeiter</div>
     </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-navigation', Navigation);