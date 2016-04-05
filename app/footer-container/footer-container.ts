import {Component} from "angular2/core";

const TEMPLATE = require('./footer-container.jade');
const STYLE = require('./footer-container.scss');

@Component({
    selector: 'footer-container',
    template: `<style>${STYLE}</style>${TEMPLATE}`
})
export class FooterContainerComponent {
}