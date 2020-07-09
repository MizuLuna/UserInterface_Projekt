import { LitElement, css, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import prof from '../data/prof.js'

class Teach extends navigator(LitElement) {
    
    static get properties() {
        return {
            profId: { type: Number },
        };
    }

    static get styles() {
        return css`
          li { 
              color: #666666; 
            
        }
        
        `;
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

    // getCoaching() {
    //     let coach = [];
    //     if (this.profId) {
    //         const dozenten = prof.dozenten;
    //         const dozent = dozenten.find((doz) => doz.id === this.profId);
    //         // teach = dozent.infos.teaching;
    //         coach = dozent.infos.praktikumsbetreuung;
    //     } else {
    //         html``;
    //     }
    //     return coach    
    // }
    
    render() {

        const teach = this.getTeaching();
        // const coach = this.getCoaching();

        return html`
        <link rel="stylesheet" href="../src/styles/font-style.css">
        <link rel="stylesheet" href="../src/styles/details.css">
       
        <div class="teach detail detail-style detail-style-prof font-fam">
            <h4 class="font-weight-600 font-size-md">Lehre</h4>
            ${teach.map((i) => html`
            <ul>
                <li class="font-weight-300 font-size-s">${i}</li>
            </ul>
            `)}   
        </div>
       
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-teach', Teach);

/* <div class="teach detail detail-style detail-style-prof font-fam">
<h4 class="font-weight-600 font-size-md">Praktikumsbetreuung</h4>
    ${coach.map((i) => html`
        <ul>
            <li class="font-weight-300 font-size-s">${i}</li>
        </ul>
    `)}
</div> */