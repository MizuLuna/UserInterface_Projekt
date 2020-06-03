import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import prof from '../data/prof.js'

class Headline extends navigator(LitElement) {
    
    static get properties() {
        return {
            profId: {type: Number}
        };
    }

    getProfName() {
        let profName = "";
        if (this.profId) {
            const professoren = prof.professoren;
            const professor = professoren.find((prof) => prof.id === this.profId);
            if (!professor) {
                const dozenten = prof.dozenten;
                const dozent = dozenten.find((doz) => doz.id === this.profId);
                profName = dozent.infos.name;
            } else {
                profName = professor.infos.name;
            }
        }
        return profName;
    }

    getProfTitle() {
        let profTitle = "";
        if (this.profId) {
            const professoren = prof.professoren;
            const professor = professoren.find((prof) => prof.id === this.profId);
            if (!professor) {
                const dozenten = prof.dozenten;
                const dozent = dozenten.find((doz) => doz.id === this.profId);
                profTitle = dozent.infos.title;

                if (!profTitle) {
                    profTitle = "";
                }
            } else {
                profTitle = professor.infos.title;
            }
        }
        return profTitle;
    }
    
    render() {
        const profName = this.getProfName();
        const profTitle = this.getProfTitle();

        return html`
        <link rel="stylesheet" href="../src/styles/font-style.css">
        <link rel="stylesheet" href="../src/styles/headline.css"> 
        <h1 class="headline headline-prof font-fam font-size-md font-weight-600"> ${profTitle}</h1>
        <h1 class="headline headline-prof font-fam font-size-md font-weight-600"> ${profName}</h1>
       `;
    }
}

customElements.define('studyguide-headline-prof', Headline);