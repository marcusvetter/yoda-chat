import {Component} from "angular2/core";
import {HeaderContainer} from "./header-container/header-container";
import {FooterContainer} from "./footer-container/footer-container";
import {ContentContainer} from "./content-container/content-container";

@Component({
    selector: 'yoda-chat',
    template: `
        <header-container></header-container>
        <content-container></content-container>
        <footer-container></footer-container>`,
    directives: [HeaderContainer, ContentContainer, FooterContainer],
    styles: [`
        @media (min-width: 48em) {
            html {
               font-size: 18px;
            }
        }
        
        body {
            font-family: Georgia, "Times New Roman", Times, serif;
            color: #555;
        }
        
        h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6 {
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: normal;
            color: #333;
        }
    `]
})
export class YodaChat {
}