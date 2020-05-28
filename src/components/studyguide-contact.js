import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataProf from '../data/prof.js'

class Contact extends navigator(LitElement) {
   
    static get properties() {
        return {
            //id: { type: Integer },
            profContactHouse: { type: Array },
            profContactRoom: { type: Array },
            profContactTel: { type: Array },
            profContactMail: { type: Array }
        };
    }

    constructor() {
        super();
        //this.id = null;
        this.profContactHouse= [];
        this.profContactRoom= [];
        this.profContactTel= [];
        this.profContactMail= [];
    }

     getProfContact() {
         //var semester = 'semester' + this.id;
         for (var prof in dataProf.professoren) {
             if (prof === 'professor1') {
                     this.profContactHouse.push(dataProf.professoren[prof].office.house);
                     console.log(this.profContactHouse);
                     this.profContactRoom.push(dataProf.professoren[prof].office.room);
                     this.profContactTel.push(dataProf.professoren[prof].telNumber);
                     this.profContactMail.push(dataProf.professoren[prof].email);

             }
         }
     }
   
    render() {
        return html`
        <link rel="stylesheet" href="../src/styles/font-style.css">
        <link rel="stylesheet" href="../src/styles/details.css">
        <script src="https://kit.fontawesome.com/4b3bdf8439.js" crossorigin="anonymous"></script>
        ${this.getProfContact()}
       
        <div class="professor detail detail-style detail-style-prof font-fam">
            <h4 class="font-weight-600 font-size-md" >Kontakt</h4> 
            </br>
            ${this.profContactHouse.map((i) => html`<p class="font-weight-300 font-size-s"><i class="fas fa-map-marker-alt"></i>Haus ${i}</p>`)}
            ${this.profContactRoom.map((i) => html`<p class="font-weight-300 font-size-s">Raum ${i}</p>`)}
            ${this.profContactTel.map((i) => html`<p class="font-weight-300 font-size-s"><i class="fas fa-mobile-alt"></i>Telefonnummer:<br> ${i}</p>`)}
            ${this.profContactMail.map((i) => html`<p class="font-weight-300 font-size-s"><i class="fas fa-envelope"></i>EMail:<br> ${i}</p>`)}        
        </div>

       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-contact', Contact);

