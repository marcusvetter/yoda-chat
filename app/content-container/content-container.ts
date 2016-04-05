import {Component} from "angular2/core";
import {Chat} from "./chat/chat";
import {Tabs} from "./tabs/tabs";
import {ChatMode} from "./chat-mode";

@Component({
    selector: 'content-container',
    template: `<tabs (onTabChange)="onTabChange($event)"></tabs>
               <chat [mode]="getChatMode()"></chat>`,
    directives: [Tabs, Chat]
})
export class ContentContainer {

    private chatMode: ChatMode = ChatMode.YODA;

    onTabChange(chatMode: ChatMode) {
        this.chatMode = chatMode;
    }

    getChatMode(): ChatMode {
        return this.chatMode;
    }

}