import {Component, Output, EventEmitter, Input} from "angular2/core";
import {ChatMode} from "../chat-mode";

const STYLE = require('./tabs.scss');

@Component({
    selector: 'tabs',
    template: `<style>${STYLE}</style>
                <div class="yoda-chat-nav-container">
                    <div class="container">
                        <nav class="nav yoda-chat-nav">
                            <a id="human-tab" href="#" class="nav-link" [ngClass]="{active: isHumanMode()}" (click)="onHumanTabClick()">I am a human</a>
                            <a id="yoda-tab" href="#" class="nav-link" [ngClass]="{active: isYodaMode()}" (click)="onYodaTabClick()">I am Yoda</a>
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
    
    onHumanTabClick(): void {
        this.onTabChange.emit(ChatMode.HUMAN);
    }

    isYodaMode(): boolean {
        return this.mode === ChatMode.YODA;
    }

    isHumanMode(): boolean {
        return this.mode === ChatMode.HUMAN;
    }
}