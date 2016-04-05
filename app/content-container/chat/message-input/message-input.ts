import {Component, Output, EventEmitter} from "angular2/core";

const TEMPLATE = require('./message-input.jade');
const STYLE = require('./message-input.scss');

@Component({
    selector: 'message-input',
    template: `<style>${STYLE}</style>${TEMPLATE}`
})
export class MessageInput {
    @Output() onSendMessage = new EventEmitter();

    public sendMessage(message:string): void {
        this.onSendMessage.emit(message);
    }
}