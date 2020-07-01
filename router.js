import { LitElement, html } from 'lit-element';
import { router } from 'lit-element-router';

import './home';
import './src/views/semester';
import './src/views/moduls';
import './src/views/modul-details';
import './src/views/obligation-module'
import './src/views/obligation-module-details'
import './src/views/profs';
import './src/views/prof-details';


class Router extends router(LitElement) {
    static get properties() {
        return {
            route: { type: String },
            params: { type: Object },
            query: { type: Object }
        };
    }


    static get routes() {
        return [{
            name: 'home',
            pattern: ''
        }, {
            name: 'semesterview',
            pattern: 'semesteruebersicht'
        }, {
            name: 'moduls',
            pattern: 'semesteruebersicht/semester/:semesterId/modul'
        }, {
            name: 'moduldetail',
            pattern: 'semesteruebersicht/semester/:semesterId/modul/:courseId'
        }, {
            name: 'obligation',
            pattern: 'semesteruebersicht/semester/:semesterId/modul/:courseId/obligation_modules'
        }, {
            name: 'obligationdetail',
            pattern: 'semesteruebersicht/semester/:semesterId/modul/:courseId/obligation_modules/:obligationId'
        }, {
            name: 'profview',
            pattern: 'professor_und_mitarbeiter'
        }, {
            name: 'profdetail',
            pattern: 'professor_und_mitarbeiter/:profId'
        }];
    }

    constructor() {
        super();
        this.route = '';
        this.params = {};
        this.query = {};
    }

    router(route, params, query, data) {
        this.route = route;
        this.params = params;
        this.query = query;
        console.log(route, params, query, data);
    }

    //obligation views auskommentieren für working state
    render() {
        return html` 
      <app-main active-route=${this.route}>
        <studyguide-home route="home" ?hidden="${this.route !== 'home'}"></studyguide-home>
        <studyguide-semester route="semesterview" ?hidden="${this.route !== 'semesterview'}"></studyguide-semester>
        <studyguide-moduls route="moduls" semesterId="${this.params.semesterId}" ?hidden="${this.route !== 'moduls'}"></studyguide-moduls>
        <studyguide-moduldetails route="moduldetail" semesterId="${this.params.semesterId}" courseId="${this.params.courseId}" ?hidden="${this.route !== 'moduldetail'}"></studyguide-moduldetails>

        <studyguide-obligation-moduls route="obligation" semesterId="${this.params.semesterId}" courseId="${this.params.courseId}" ?hidden="${this.route !== 'obligation'}"></studyguide-obligation-moduls>
        <studyguide-obligation-moduldetails route="obligationdetail" semesterId="${this.params.semesterId}" courseId="${this.params.courseId}" obligationId="${this.params.obligationId}" ?hidden="${this.route !== 'obligationdetail'}"></studyguide-obligation-moduldetails>
       

        <studyguide-prof route="profview" ?hidden="${this.route !== 'profview'}"></studyguide-prof>
        <studyguide-profdetails route="profdetail" profId="${this.params.profId}" ?hidden="${this.route !== 'profdetail'}"></studyguide-profdetails>
      </app-main>
    `;
    }
}

customElements.define('studyguide-router', Router);