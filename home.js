
// Import the LitElement base class and html helper function
import { LitElement, css, html } from 'lit-element';
import { navigator } from 'lit-element-router';


// Extend the LitElement base class
class Home extends navigator(LitElement) {
    static get properties() {
        return {
            href: { type: String }
        };
    }

    constructor() {
        super();
        this.href = '';
    }

    static get styles() {
        return css`
          div { 
              color: #666666; 
              text-align: center;
              max-width: 500px;
              margin-left: 10%;
        }
        button {
            padding: 15px;
            width: 80%;
            margin-bottom: 2.5rem;
        }
        `;
      }

    render() {
        return html`
            <link rel="stylesheet" href="src/styles/font-style.css">
            <link rel="stylesheet" href="../src/styles/returnBtn.css">
            
            <div>
                <h2 class="font-weight-600 font-size-lg font-fam">Willkommen!</h2>
                <h4 class="font-weight-600 font-size-md font-fam">zum ultimativen Guide für das Studium der Angewandten Informatik!</h4>
                <p class="font-weight-300 font-size-s font-fam">Wollt ihr sehen was in den Semestern so abgeht?</p>
                <button class="return-Btn-style return-Btn-sem font-size-md font-weight-600" @click="${this.clickHandler}">Semesterübersicht</button>
                <p class="font-weight-300 font-size-s font-fam">Oder wollt ihr wissen wie ihr eure Professoren erreicht und was die so drauf haben?</p>
                <button class=" return-Btn-style return-Btn-prof font-size-md font-weight-600" @click="${this.prof}">Professoren und Mitarbeiter Übersicht</button>
            </div>
       
       `;
    }

    clickHandler(e) {
        this.navigate('/semesteruebersicht');
    }
    prof(e) {
        this.navigate('/professor_und_mitarbeiter');
    }
    profdetail(e) {
        this.navigate('/professor_und_mitarbeiter/1');
    }
    moduldetail(e) {
        this.navigate('/semesteruebersicht/semester/1/modul/1');
    }
    modul(e) {
        this.navigate('/semesteruebersicht/semester/1/modul');
    }
}
// Register the new element with the browser.
customElements.define('studyguide-home', Home);