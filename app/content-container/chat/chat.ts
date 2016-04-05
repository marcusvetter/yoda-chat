import {Component, Input} from "angular2/core";
import {Message} from "./message/message";
import {ChatMode} from "./chat-mode";
import {MessageInput} from "./message-input/message-input";

const TEMPLATE = require('./chat.jade');
const STYLE = require('./chat.scss');

@Component({
    selector: 'chat',
    template: `<style>${STYLE}</style>${TEMPLATE}`,
    directives: [Message, MessageInput]
})
export class Chat {
    @Input() mode: ChatMode;

    private messages: any[];

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
                author: 'Somethree'
            }
        ]
    }
}