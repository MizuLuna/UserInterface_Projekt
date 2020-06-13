import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import data from '../data/sem.js'
import prof from '../data/prof.js'


class Professor extends navigator(LitElement) {
    
    static get properties() {
        return {
            semesterId: { type: Number },
            courseId: { type: Number },
            obligationId: { type: Number },
            moduleSWSv: { type: Number },
            moduleSWSue: { type: Number },
            moduleSWSp: { type: Number },
            moduleName: { type: String }
        };
    }

    constructor() {
        super();
        this.moduleSWSv = 0;
        this.moduleSWSue = 0;
        this.moduleSWSp = 0;
        this.moduleName = "";
    }

    getProfName() {
        let profName = "";
        if (this.semesterId && (this.semesterId === 6) && this.courseId && (this.courseId === 6) && this.obligationId) {
            const semester = data.find((semester) => semester.id === this.semesterId)
            const course = semester.modules.find((module) => module.id === this.courseId);
            const modul = course.modules.find((module) => module.id === this.obligationId);
            profName = modul.profname;
        } else if (this.semesterId && this.courseId) {
            const semester = data.find((semester) => semester.id === this.semesterId);
            const course = semester.modules.find((module) => module.id === this.courseId);
            profName = course.profname;
        }
        return profName
    }

    getProfTitle(profName) {
        let profTitle = "";
        if (this.semesterId && (this.semesterId === 6) && this.courseId && (this.courseId === 6) && this.obligationId) {
            profTitle = "";
        } else if (profName) {
            const professoren = prof.professoren;
            const professor = professoren.find((prof) => prof.infos.name === profName);
            if (!professor) {
                const dozenten = prof.dozenten;
                const dozent = dozenten.find((doz) => doz.infos.name === profName);
                profTitle = dozent.infos.title;

                if (!profTitle) {
                    profTitle = "";
                }
            } else {
                profTitle = professor.infos.title;
            }            
        }
        return profTitle
    }

    getSWS() {
        if (this.semesterId && (this.semesterId === 6) && this.courseId && (this.courseId === 6) && this.obligationId) {
            const semester = data.find((semester) => semester.id === this.semesterId)
            const course = semester.modules.find((module) => module.id === this.courseId);
            const modul = course.modules.find((module) => module.id === this.obligationId);
            this.moduleSWSv = modul.hour.vorlesung;
            this.moduleSWSue = modul.hour.uebung;
            this.moduleSWSp = modul.hour.praktikum;
        } else if (this.semesterId && this.courseId) {
            const semester = data.find((semester) => semester.id === this.semesterId);
            const course = semester.modules.find((module) => module.id === this.courseId);
            this.moduleSWSv = course.hour.vorlesung;
            this.moduleSWSue = course.hour.uebung;
            this.moduleSWSp = course.hour.praktikum;
        }
    }

    getModulName() {
        if (this.semesterId && (this.semesterId === 6) && this.courseId && (this.courseId === 6) && this.obligationId) {
            const semester = data.find((semester) => semester.id === this.semesterId)
            const course = semester.modules.find((module) => module.id === this.courseId);
            const modul = course.modules.find((module) => module.id === this.obligationId);
           
            this.moduleName = modul.name;
        } else if (this.semesterId && this.courseId) {
            const semester = data.find((semester) => semester.id === this.semesterId);
            const course = semester.modules.find((module) => module.id === this.courseId);
            this.moduleName = course.name;
        }
    }
    
    render() {

        const profName = this.getProfName();
        const profTitle = this.getProfTitle(profName);
        this.getSWS();
        this.getModulName();

        return html`
        <link rel="stylesheet" href="../src/styles/font-style.css">
        <link rel="stylesheet" href="../src/styles/details.css">
        <link rel="stylesheet" href="../src/styles/headline.css">

        <h1 class="headline headline-sem font-fam font-size-lg font-weight-600">${this.moduleName}</h1>
        <div class="professor detail detail-style detail-style-sem font-fam">
            <h4 class="font-weight-600 font-size-md">${profTitle}</h4>
            <h4 class="font-weight-600 font-size-md">${profName}</h4> 
            </br>
            <p class="font-weight-300 font-size-s">${this.moduleSWSv} SWS Vorlesung</p>
            <p class="font-weight-300 font-size-s">${this.moduleSWSue}  SWS Übung</p>
            <p class="font-weight-300 font-size-s">${this.moduleSWSp} SWS Praktikum</p> 
        </div>
       `;
    }
}

customElements.define('studyguide-professor', Professor);