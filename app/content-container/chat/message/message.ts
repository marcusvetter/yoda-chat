import {Component, Input} from "angular2/core";

const TEMPLATE = require('./message.jade');
const STYLE = require('./message.scss');

@Component({
    selector: 'message',
    template: `<style>${STYLE}</style>${TEMPLATE}`
})
export class Message {
    @Input() text:string;
    @Input() author:string;

    public date:Date = new Date();
}