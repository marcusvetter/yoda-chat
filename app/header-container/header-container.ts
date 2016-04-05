import {Component} from "angular2/core";

const TEMPLATE = require('./header-container.jade');
const STYLE = require('./header-container.scss');

@Component({
    selector: 'header-container',
    template: `<style>${STYLE}</style>${TEMPLATE}`
})
export class HeaderContainerComponent {
}