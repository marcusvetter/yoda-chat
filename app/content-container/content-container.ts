import {Component} from "angular2/core";
import {Message} from "./message/message";

const TEMPLATE = require('./content-container.jade');
const STYLE = require('./content-container.scss');

@Component({
    selector: 'content-container',
    template: `<style>${STYLE}</style>${TEMPLATE}`,
    directives: [Message]
})
export class ContentContainer {
}