import {Component} from "angular2/core";

@Component({
    selector: 'footer-container',
    template: `
        <footer class="yoda-chat-footer">
            <p>By mave&#64;<a href="http://zuehlke.com">zuehlke</a></p>
        </footer>`,
    styles: [`
        .yoda-chat-footer {
            padding: 2.5rem 0;
            color: #999;
            text-align: center;
            background-color: #f9f9f9;
        }
        
        .yoda-chat-footer p {
            margin-bottom: 0;
        }
    `]
})
export class FooterContainer {
}