import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataSem from '../data/sem.js'


class Internship extends navigator(LitElement) {

    render() {
        return html`
      <link rel="stylesheet" href="../src/styles/font-style.css">
       <link rel="stylesheet" href="../src/styles/details.css">
       <script src="https://kit.fontawesome.com/4b3bdf8439.js" crossorigin="anonymous"></script>
        
       <h1>Praxissemester</h1>
   
          <div class="detail detail-style detail-style-sem font-fam font-size-md">
            <h4 class="font-weight-600">Ansprechpartner</h4> 
            </br> 
            <p class="font-weight-300">${this.dataSem.semester.semester5.contactPerson.name}</p>
            <p class="font-weight-300">Haus: ${this.dataSem.semester.semester5.contactPerson.office.house}></p>
            <p class="font-weight-300">Raum: ${this.dataSem.semester.semester5.contactPerson.office.room}"</p> 
            <p class="font-weight-300">Telefonnummer: ${this.dataSem.ssemester5.emester.contactPerson.telNumber}></p> 
            <p class="font-weight-300">EMail: ${this.dataSem.semester.ssemester5.contactPerson.email}></p> 
          </div>
          <div class="div--style font-fam font-size-md">
            <h4 class="font-weight-600">Hinweise</h4> 
            </br>
            <p class="font-weight-300">Dauer: ${this.dataSem.semester.semester5.duration}</p>
            <p class="font-weight-300">Hinweise: <a href="${this.dataSem.semester.semester5.hints}"></p>
            <p class="font-weight-300">Antrag: <a href="${this.dataSem.semester.semester5.motion}"></p>
          </div> 
        
       `;
    }

}

customElements.define('studyguide-internship', Internship);