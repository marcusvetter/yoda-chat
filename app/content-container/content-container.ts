import {Component} from "angular2/core";
import {Chat} from "./chat/chat";
import {Tabs} from "./tabs/tabs";

const TEMPLATE = require('./content-container.jade');
const STYLE = require('./content-container.scss');

@Component({
    selector: 'content-container',
    template: `<style>${STYLE}</style>${TEMPLATE}`,
    directives: [Tabs, Chat]
})
export class ContentContainer {
}