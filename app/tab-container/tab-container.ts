import {Component} from "angular2/core";

const TEMPLATE = require('./tab-container.jade');
const STYLE = require('./tab-container.scss');

@Component({
    selector: 'tab-container',
    template: `<style>${STYLE}</style>${TEMPLATE}`
})
export class TabContainerComponent {
}