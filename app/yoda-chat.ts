import {Component} from 'angular2/core';

const TEMPLATE = require('./yoda-chat.jade');
const STYLE = require('./yoda-chat.scss');

@Component({
    selector: 'yoda-chat',
    template: `<style>${STYLE}</style>${TEMPLATE}`
})
export class YodaChatComponent {
}