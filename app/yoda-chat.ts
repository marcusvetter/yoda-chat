import {Component} from 'angular2/core';
import {HeaderContainerComponent} from "./header-container/header-container";
import {FooterContainerComponent} from "./footer-container/footer-container";
import {ContentContainerComponent} from "./content-container/content-container";

const TEMPLATE = require('./yoda-chat.jade');
const STYLE = require('./yoda-chat.scss');

@Component({
    selector: 'yoda-chat',
    template: `<style>${STYLE}</style>${TEMPLATE}`,
    directives: [HeaderContainerComponent, ContentContainerComponent, FooterContainerComponent]
})
export class YodaChatComponent {
}