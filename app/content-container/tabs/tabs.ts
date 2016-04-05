import {Component, Output, EventEmitter, Input} from "angular2/core";
import {ChatMode} from "../chat-mode";

const STYLE = require('./tabs.scss');

@Component({
    selector: 'tabs',
    template: `<style>${STYLE}</style>
                <div class="yoda-chat-nav-container">
                    <div class="container">
                        <nav class="nav yoda-chat-nav">
                            <a href="#" class="nav-link" [ngClass]="{active: isYodaMode()}" (click)="onYodaTabClick()">I am Yoda</a>
                            <a href="#" class="nav-link" [ngClass]="{active: isJediMode()}" (click)="onJediTabClick()">I am a Jedi</a>
                        </nav>
                    </div>
                </div>`
})
export class Tabs {
    @Output() onTabChange = new EventEmitter();
    @Input() mode: ChatMode;
    
    onYodaTabClick(): void {
        this.onTabChange.emit(ChatMode.YODA);
    }

    onJediTabClick(): void {
        this.onTabChange.emit(ChatMode.JEDI);
    }

    isYodaMode(): boolean {
        return this.mode === ChatMode.YODA;
    }

    isJediMode(): boolean {
        return this.mode === ChatMode.JEDI;
    }
}