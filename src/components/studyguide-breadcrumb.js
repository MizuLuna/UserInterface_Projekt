import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';


class Breadcrumb extends navigator(LitElement) {
    render() {
        return html`
        <!--<link rel="stylesheet" href="breadcrumb.css">-->
        
        <div class="breadcrumb">Semesterübersicht</div> 
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-breadcrumb', Breadcrumb);