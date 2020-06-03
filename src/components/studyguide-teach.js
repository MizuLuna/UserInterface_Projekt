import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import prof from '../data/prof.js'

class Teach extends navigator(LitElement) {
    
    static get properties() {
        return {
            profId: { type: Number },
        };
    }

    getTeaching() {
        let teach = [];
        if (this.profId) {
            const professoren = prof.professoren;
            const professor = professoren.find((prof) => prof.id === this.profId);
            if (!professor) {
                const dozenten = prof.dozenten;
                const dozent = dozenten.find((doz) => doz.id === this.profId);
                teach = dozent.infos.teaching;
            } else {
                teach = professor.infos.teaching;
            }
        }
        return teach
    }
    
    render() {

        const teach = this.getTeaching();

        return html`
        <link rel="stylesheet" href="../src/styles/font-style.css">
        <link rel="stylesheet" href="../src/styles/details.css">
       
        <div class="teach detail detail-style detail-style-prof font-fam">
            <h4 class="font-weight-600 font-size-md">Lehre</h4>
            </br>
            ${teach.map((i) => html`<p class="font-weight-300 font-size-s">${i}</p>`)}
        </div>

       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-teach', Teach);