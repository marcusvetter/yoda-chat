import {Component} from "angular2/core";
import {Message} from "./message/message";

const TEMPLATE = require('./chat.jade');
const STYLE = require('./chat.scss');

@Component({
    selector: 'chat',
    template: `<style>${STYLE}</style>${TEMPLATE}`,
    directives: [Message]
})
export class Chat {
}