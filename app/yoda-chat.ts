import {Component} from 'angular2/core';
import {HeaderContainer} from "./header-container/header-container";
import {FooterContainer} from "./footer-container/footer-container";
import {ContentContainer} from "./content-container/content-container";

const TEMPLATE = require('./yoda-chat.jade');
const STYLE = require('./yoda-chat.scss');

@Component({
    selector: 'yoda-chat',
    template: `<style>${STYLE}</style>${TEMPLATE}`,
    directives: [HeaderContainer, ContentContainer, FooterContainer]
})
export class YodaChat {
}