import {Component} from 'angular2/core';
import {TabContainerComponent} from "./tab-container/tab-container";

const TEMPLATE = require('./yoda-chat.jade');
const STYLE = require('./yoda-chat.scss');

@Component({
    selector: 'yoda-chat',
    template: `<style>${STYLE}</style>${TEMPLATE}`,
    directives: [TabContainerComponent]
})
export class YodaChatComponent {
}