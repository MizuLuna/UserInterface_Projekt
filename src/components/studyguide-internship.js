import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import data from '../data/sem.js'


class Internship extends navigator(LitElement) {
    static get properties() {
        return {
            semesterId: { type: Number },
            courseId: { type: Number },
            hints: { type: String },
            motion: { type: String },
            duration: { type: Number }
        };
    }

    constructor() {
        super();
        this.duration = 0;
        this.hints = "";
        this.motion = "";
        this.courseId = 1;
    }

    getContact() {
        let contact = {};
        if (this.semesterId && this.courseId) {
            const semester = data.find((semester) => semester.id === this.semesterId)
            const course = semester.modules.find((module) => module.id === this.courseId);
            contact = course.contactPerson;
        }
        return contact
    }

    getInfo() {
        if (this.semesterId && this.courseId) {
            const semester = data.find((semester) => semester.id === this.semesterId)
            const course = semester.modules.find((module) => module.id === this.courseId);
            this.hints = course.hints;
            this.motion = course.motion;
            this.duration = course.duration;
        }
    }

    render() {

        const contact = this.getContact();
        this.getInfo();

        return html`
      <link rel="stylesheet" href="../src/styles/font-style.css">
       <link rel="stylesheet" href="../src/styles/details.css">
        
       <h1>Praxissemester</h1>
   
          <div class="detail detail-style detail-style-sem font-fam font-size-md">
            <h4 class="font-weight-600">Ansprechpartner</h4> 
            </br> 
            <p class="font-weight-300">${contact.name}</p>
            <p class="font-weight-300">Haus: ${contact.office.house}</p>
            <p class="font-weight-300">Raum: ${contact.office.room}</p> 
            <p class="font-weight-300">Telefonnummer: ${contact.telNumber}</p> 
            <p class="font-weight-300">EMail: ${contact.email}</p> 
          </div>
          <div class="div--style font-fam font-size-md">
            <h4 class="font-weight-600">Hinweise</h4> 
            </br>
            <p class="font-weight-300">Dauer: mind. ${this.duration} Tage</p>
            <p class="font-weight-300"><a href="${this.hints}">Hinweise</a> </p>
            <p class="font-weight-300"><a href="${this.motion}">Antrag</a> </p>




          </div> 
        
       `;
    }

}

customElements.define('studyguide-internship', Internship);