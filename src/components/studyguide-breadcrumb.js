import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';


class Breadcrumb extends navigator(LitElement) {
    render() {
        return html`
        <link rel="stylesheet" href="../src/styles/font-style.css">
        <link rel="stylesheet" href="../src/styles/breadcrumb.css">
        
        <div class="breadcrumb breadcrumb-sem font-fam font-size-s font-weight-600">Professoren und Mitarbeiter</div> 
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-breadcrumb', Breadcrumb);