import { LitElement, css, html } from 'lit-element';
import { navigator } from 'lit-element-router';


class Navigation extends navigator(LitElement) {

    static get styles() {
        return css`
        *{
            box-sizing: border-box;
        }

        body{
            margin: 0;
        }

        .nav-bottom{
            position: fixed;
            color: #f2f2f2;
            bottom: 0;
            width: 100%;
            background-color: white;
        }

        .item-pos{
            display: inline-block;
            width: 49.6%;
            text-align: center;
            height: 100%;
            padding: 15px;
        }

        .item-sem{
            background-color: #00b1db;
        }

        .item-prof{
            background-color: #886cff;
        }

        .font-fam{
            font-family: 'Fira Sans', sans-serif;
        }
        .font-size-xs{
            font-size: 1rem;
        }

        .font-weight-600{
            font-weight: 600;
        }
        `;
      }

    render() {
        return html`
        <div class="nav-bottom font-fam font-size-xs font-weight-600">
            <div class="item-sem item-pos" @click=${this.clickHandler}>Semesterübersicht</div>
            <div class="item-prof item-pos" @click=${this.prof}>Professoren und Mitarbeiter</div>
        </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesteruebersicht');
    }
    prof(e) {
        this.navigate('/professor_und_mitarbeiter');
    }
}

customElements.define('studyguide-navigation', Navigation);