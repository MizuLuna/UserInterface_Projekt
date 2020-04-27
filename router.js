import { LitElement, html } from 'lit-element';
import { router } from 'lit-element-router';

import './home';
//import './semesterview/semesterview';
//import './semesterview/modulview/modul';
//import './semesterview/detailpage/modul-details';
//import './professorview/profview';
//import './professorview/detailpage/prof-details';
import './src/components/studyguide-breadcrumb';
import './src/components/studyguide-square';


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
            name: 'modules',
            pattern: 'semesteruebersicht/semester/:id/module'
        }, {
            name: 'moduldetail',
            pattern: 'semesteruebersicht/semester/:id/modul/:id'
        }, {
            name: 'profview',
            pattern: 'professor_und_mitarbeiter'
        }, {
            name: 'profdetail',
            pattern: 'professor_und_mitarbeiter/:id'
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

    render() {
        return html` 
      <app-main active-route=${this.route}>
        <studyguide-breadcrumb></studyguide-breadcrumb>      

        <studyguide-home route="home" ?hidden="${this.route !== 'home'}"></studyguide-home>
        <studyguide-semesterview route="semesterview" ?hidden="${this.route !== 'semesterview'}"></studyguide-semesterview>
        <studyguide-modul route="modules" ?hidden="${this.route !== 'modules'}"></studyguide-semesterview>
        <studyguide-moduldetails route="moduldetail" ?hidden="${this.route !== 'moduldetail'}"></studyguide-semesterview>
        <studyguide-profview route="profview" ?hidden="${this.route !== 'profview'}"></studyguide-semesterview>
        <studyguide-profdetails route="profdetail" ?hidden="${this.route !== 'profdetail'}"></studyguide-semesterview>
      </app-main>
    `;
    }
}

customElements.define('studyguide-router', Router);