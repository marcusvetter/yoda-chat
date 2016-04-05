import {Component} from "angular2/core";

const TEMPLATE = require('./tabs.jade');
const STYLE = require('./tabs.scss');

@Component({
    selector: 'tabs',
    template: `<style>${STYLE}</style>${TEMPLATE}`
})
export class Tabs {
}