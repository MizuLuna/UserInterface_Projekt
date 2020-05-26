import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';


class Navigation extends navigator(LitElement) {
    render() {
        return html`
       <link rel="stylesheet" href="../src/styles/navigation.css">
      
       <div class="nav-bottom">
       <div class="item-sem item-pos" @click=${this.clickHandler}>Semesterübersicht</div>
       <div class="item-prof item-pos" @click=${this.prof}>Professoren und Mitarbeiter</div>
     </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesteruebersicht');
    }
    prof(e) {
        this.navigate('/professor_und_mitarbeiter');
    }
}

customElements.define('studyguide-navigation', Navigation);