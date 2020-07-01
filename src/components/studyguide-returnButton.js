import { LitElement, css, html } from 'lit-element';
import { navigator } from 'lit-element-router';


class Returnbutton extends navigator(LitElement) {

    static get properties() {
        return {
            semesterId: { type: Number },
            courseId: { type: Number }
        };
    }
    static get styles() {
        return css`
        .return-Btn{
            width: 80%;
            max-width: 500px;
            margin-top: 5%;
            margin-left: 10%;
            margin-bottom: 15%;
            padding: 15px;
        }
        
        .return-Btn-style {
            border-radius: 7px;
            border: none;
            text-align: center;
            color: #f2f2f2;
            box-shadow: 10px 9px 16px 1px rgba(0,0,0,0.16);
        }
        
        .return-Btn-sem{
            background-color: #00b1db;
        }
        
        .return-Btn-prof{
            background-color: #886cff;
        }

        .font-size-md{
            font-size: 1.6rem;
        }

        .font-size-lg{
            font-size: 3rem;
        }

        .font-weight-600{
            font-weight: 600;
        }

        .font-fam{
            font-family: 'Fira Sans', sans-serif;
        }
        `;
    }


    render() {
        return html`
       <button class="return-Btn return-Btn-style return-Btn-sem font-fam font-size-md font-weight-600" @click=${this.clickHandler}>Zurück zur Übersicht</button>
       `;
    }

    clickHandler(semesterId) {
        this.navigate(`/semesteruebersicht/semester/${this.semesterId}/modul`);
    }
}

customElements.define('studyguide-returnbutton', Returnbutton);