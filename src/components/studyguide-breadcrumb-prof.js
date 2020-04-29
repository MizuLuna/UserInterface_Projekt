import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';


class Breadcrumb extends navigator(LitElement) {
    render() {
        return html`
        <link rel="stylesheet" href="../src/styles/breadcrumb-prof.css">
        
        <div class="breadcrumb">Semester�bersicht</div> 
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-breadcrumb', Breadcrumb);