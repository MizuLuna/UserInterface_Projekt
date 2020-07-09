import { LitElement, css, html } from 'lit-element';
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

    static get styles() {
        return css`
        
        *{box-sizing: border-box;}

        body{margin: 0;}

        a {text-decoration: none;}

        h4 {
            color: #666666;
            margin-block-start: 0em;
            margin-block-end: 0em;
        }

        p {
            color: #666666;
            margin-block-start: 0em;
            margin-block-end: 0em;
        }
        .font-weight-300 {font-weight: 300;}
        .font-weight-600 {font-weight: 600;}
        .detail { 
            margin-top: 1.5rem; 
            width: 80%;
            max-width: 500px;
            margin-left:10%;
            padding: 15px;
        }
        
        .detail-style {
            background-color: #f2f2f2;
            border-radius: 7px;
            box-shadow: 10px 9px 16px 1px rgba(0,0,0,0.16);
        } 
        .detail-style-sem {border: 1px solid #00b1db;}
        .font-fam {font-family: 'Fira Sans', sans-serif;} 
        .font-size-md {font-size: 1.6rem;}
        .font-size-lg{font-size: 3rem;}
        
        .headline{
            margin-left: 10vw;
            margin-top: 5%;
            margin-block-end: 0em;
        }

        .headline-sem{
            color: #00b1db;
        }
        `;
    }

    getContact() {
        let contact = {};
        if (this.semesterId && this.courseId) {
            const semester = data.find((semester) => semester.id === this.semesterId);
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
            <h1 class="headline headline-sem font-weight-600 font-size-lg font-sem font-fam">Praxissemester</h1>
            <div class="detail detail-style detail-style-sem font-fam font-size-md">
                <h4 class="font-weight-600 font-fam">Ansprechpartner</h4> 
                <br> 
                <p class="font-weight-300">${contact.name}</p>
                <p class="font-weight-300">Haus: ${contact.office.house}</p>
                <p class="font-weight-300">Raum: ${contact.office.room}</p> 
                <p class="font-weight-300">Telefonnummer: ${contact.telNumber}</p> 
                <p class="font-weight-300">EMail: ${contact.email}</p> 
            </div>
            <div class="detail detail-style detail-style-sem font-fam font-size-md">
                <h4 class="font-weight-600">Hinweise</h4> 
                <br>
                <p class="font-weight-300">Dauer: mind. ${this.duration} Tage</p>
                <p class="font-weight-300"><a href="${this.hints}">Hier geht es zu den Hinweisen</a> </p>
                <p class="font-weight-300"><a href="${this.motion}">Hier geht es zum Antrag</a> </p>
            </div>        
       `;
    }
}

customElements.define('studyguide-internship', Internship);