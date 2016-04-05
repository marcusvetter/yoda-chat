import {Component, Input} from "angular2/core";
import {Message} from "./message/message";
import {ChatMode} from "./chat-mode";
import {MessageInput} from "./message-input/message-input";

@Component({
    selector: 'chat',
    template: `
        <div class="container content-container">
            <div class="row">
                <div class="col-sm-8 yoda-chat-main">
                    <message *ngFor="#message of messages" text="{{message.yodaText}}" author="{{message.author}}"></message>
                </div>
            </div>
        </div>
        <message-input (onSendMessage)="onSendMessage($event)"></message-input>`,
    directives: [Message, MessageInput],
    styles: [`
        .container {
            max-width: 45rem;
        }
        
        .content-container {
            max-height: 300px;
            overflow-y: auto;
        }
    `]
})
export class Chat {
    @Input() mode:ChatMode;

    private messages:any[];

    constructor() {
        this.messages = [
            {
                yodaText: 'Yoda Text',
                jediText: 'Jedi Text',
                author: 'Someone'
            },
            {
                yodaText: 'Yoda Text 2',
                jediText: 'Jedi Text 2',
                author: 'Sometwo'
            },
            {
                yodaText: 'Yoda Text 3',
                jediText: 'Jedi Text 3',
                author: 'Somethreee'
            }
        ]
    }

    public onSendMessage(message:string):void {
        alert(message);
    }
}