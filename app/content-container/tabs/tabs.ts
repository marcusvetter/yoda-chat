import {Component, Output, EventEmitter} from "angular2/core";
import {ChatMode} from "../chat-mode";

const STYLE = require('./tabs.scss');

@Component({
    selector: 'tabs',
    template: `<style>${STYLE}</style>
                <div class="yoda-chat-nav-container">
                    <div class="container">
                        <nav class="nav yoda-chat-nav">
                            <a href="#" class="nav-link active" (click)="onYodaTabClick()">I am Yoda</a>
                            <a href="#" class="nav-link" (click)="onJediTabClick()">I am a Jedi</a>
                        </nav>
                    </div>
                </div>`
})
export class Tabs {
    @Output() onTabChange = new EventEmitter();

    onYodaTabClick(): void {
        this.onTabChange.emit(ChatMode.YODA);
    }

    onJediTabClick(): void {
        this.onTabChange.emit(ChatMode.JEDI);
    }
}