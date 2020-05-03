import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataSem from '../data/sem.js'


class Internship extends navigator(LitElement) {

    render() {
        return html`
       <link rel="stylesheet" href="../src/styles/sem-detail.css">
       <script src="https://kit.fontawesome.com/4b3bdf8439.js" crossorigin="anonymous"></script>
        
       <h1>Praxissemester</h1>
   
          <div class="div--style">
            <h4>Ansprechpartner</h4>  
            <p>${this.dataSem.semester.semester5.contactPerson.name}</p>
            <p>Haus: ${this.dataSem.semester.semester5.contactPerson.office.house}></p>
            <p>Raum: ${this.dataSem.semester.semester5.contactPerson.office.room}"</p> 
            <p>Telefonnummer: ${this.dataSem.ssemester5.emester.contactPerson.telNumber}></p> 
            <p>EMail: ${this.dataSem.semester.ssemester5.contactPerson.email}></p> 
          </div>
          <div class="div--style">
            <h4>Hinweise</h4> 
            <p>Dauer: ${this.dataSem.semester.semester5.duration}</p>
            <p>Hinweise: <a href="${this.dataSem.semester.semester5.hints}"></p>
            <p>Antrag: <a href="${this.dataSem.semester.semester5.motion}"></p>
          </div> 
        
       `;
    }

}

customElements.define('studyguide-internship', Internship);