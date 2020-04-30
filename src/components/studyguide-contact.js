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
        <link rel="stylesheet" href="../src/styles/prof-detail.css">

        <div class="professor div--style">
            <h4>Kontakt</h4> 

         ${this.getProfContact()}
          
         ${this.profContactHouse.map((i) => html`<p>Haus ${i}</p>`)}
         ${this.profContactRoom.map((i) => html`<p>Raum ${i}</p>`)}
         ${this.profContactTel.map((i) => html`<p>Telefonnummer: ${i}</p>`)}
         ${this.profContactMail.map((i) => html`<p>EMail: ${i}</p>`)}        


        </div>

       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-contact', Contact);

