import {Component} from "angular2/core";

const STYLE = require('./tabs.scss');

@Component({
    selector: 'tabs',
    template: `<style>${STYLE}</style>
                <div class="yoda-chat-nav-container">
                    <div class="container">
                        <nav class="nav yoda-chat-nav">
                            <a href="#" class="nav-link active">I am Yoda</a>
                            <a href="#" class="nav-link">I am a Jedi</a>
                        </nav>
                    </div>
                </div>`
})
export class Tabs {
}