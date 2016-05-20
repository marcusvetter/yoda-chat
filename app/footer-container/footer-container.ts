import {Component} from "angular2/core";

@Component({
    selector: 'footer-container',
    template: `
        <footer class="yoda-chat-footer">
            <p>By <a href="mailto:sia@zuehlke.com">sia</a>/<a href="mailto:mave@zuehlke.com">mave</a>&#64;zuehlke.com</p>
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