import { LitElement, html } from 'lit-element';
import { router } from 'lit-element-router';

import './my-element';
import './semesterview/overview/sem-overview';


class MyApp extends router(LitElement) {
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
        <my-element route="home" ?hidden="${this.route !== 'home'}"></my-element>
        <my-element2 route="semesterview" ?hidden="${this.route !== 'semesterview'}"></my-element2>
      </app-main>
    `;
    }


}

customElements.define('my-app', MyApp);