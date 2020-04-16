import { LitElement, html } from 'lit-element';
import { router } from 'lit-element-router';

import './home';
import './semesterview/semesterview';


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
            pattern: 'semesterview'
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
        <studyguide-home route="home" ?hidden="${this.route !== 'home'}"></studyguide-home>
        <studyguide-semesterview route="semesterview" ?hidden="${this.route !== 'semesterview'}"></studyguide-semesterview>
      </app-main>
    `;
    }


}

customElements.define('studyguide-router', Router);