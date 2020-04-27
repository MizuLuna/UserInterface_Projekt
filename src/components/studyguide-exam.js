import { LitElement, html } from 'lit-element';
import { navigator } from 'lit-element-router';
import dataSem from '../data/sem.js'

class Exam extends navigator(LitElement) {
    render() {
        return html`
       <link rel="stylesheet" href="sem-detail.css">
       
        <div class="exam div--style">
            <h4>Prüfung</h4>
            <p>120 min schriftlich</p>
            <p>8 Credits</p>
        </div>
       `;
    }

    clickHandler(e) {
        this.navigate('/semesterview');
    }
}

customElements.define('studyguide-exam', Exam);