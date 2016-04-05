import {Component} from "angular2/core";

const TEMPLATE = require('./content-container.jade');
const STYLE = require('./content-container.scss');

@Component({
    selector: 'content-container',
    template: `<style>${STYLE}</style>${TEMPLATE}`
})
export class ContentContainerComponent {
}