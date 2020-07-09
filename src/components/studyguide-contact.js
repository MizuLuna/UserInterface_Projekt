import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import prof from '../data/prof.js'

class Contact extends navigator(LitElement) {
   
    static get properties() {
        return {
            profId: { type: Number },
        };
    }

    getContact() {
        let contact = {};
        if (this.profId) {            
            const professoren = prof.professoren;
            const professor = professoren.find((prof) => prof.id === this.profId);
            if (!professor) {
                const dozenten = prof.dozenten;
                const dozent = dozenten.find((doz) => doz.id === this.profId);
                contact = dozent.infos;
            } else {
                contact = professor.infos;
            }
        }
        return contact
    }
   
    render() {
        const contact = this.getContact();

        return html`
        <link rel="stylesheet" href="../src/styles/font-style.css">
        <link rel="stylesheet" href="../src/styles/details.css">
        <script src="https://kit.fontawesome.com/4b3bdf8439.js" crossorigin="anonymous"></script>
       
        <div class="professor detail detail-style detail-style-prof font-fam">
            <h4 class="font-weight-600 font-size-md" >Kontakt</h4> 
            <br>
            <p class="font-weight-300 font-size-s"><i class="fas fa-map-marker-alt"></i>Haus ${contact.office.house}</p>
            <p class="font-weight-300 font-size-s">Raum ${contact.office.room}</p>
            <p class="font-weight-300 font-size-s"><i class="fas fa-mobile-alt"></i>Telefonnummer:<br> ${contact.telNumber}</p>
            <p class="font-weight-300 font-size-s"><i class="fas fa-envelope"></i>EMail:<br> ${contact.email}</p>     
        </div>

       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-contact', Contact);

