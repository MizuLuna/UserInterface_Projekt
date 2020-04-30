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

    // getProfContact() {
    //     //var semester = 'semester' + this.id;
    //     for (var prof in dataProf.professoren) {
    //         if (prof === 'professor1') {
    //             for (var profDet in dataProf.professoren[prof]) {
    //                 this.profContactHouse.push(dataProf.professoren[prof][profDet].office);
    //                 console.log(this.profContactHouse);
    //                 this.profContactRoom.push(dataProf.professoren[prof][profDet].office);
    //                 this.profContactTel.push(dataProf.professoren[prof][profDet].telNumber);
    //                 this.profContactMail.push(dataProf.professoren[prof][profDet].email);
    //             }
    //         }
    //     }
    // }
   
    render() {
        return html`
        <link rel="stylesheet" href="../src/styles/prof-detail.css">

        <div class="professor div--style">
            <h4>Kontakt</h4> 
  
        </div>

       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-contact', Contact);

// <!--   ${this.getProfContact()}
          
// ${this.moduleHouse.map((i) => html`<p>Haus ${i}</p>`)}
// ${this.moduleRoom.map((i) => html`<p>Raum ${i}</p>`)}
// ${this.moduleTel.map((i) => html`<p>Telefonnummer: ${i}</p>`)}
// ${this.moduleMail.map((i) => html`<p>EMail: ${i}</p>`)}        
// -->