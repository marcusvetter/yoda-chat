import {Component} from "angular2/core";

@Component({
    selector: 'header-container',
    template: `
        <div class="header">
            <div class="container">
                <h1 class="title">The Yoda-Chat</h1>
                <p class="description">The fastest chat for humans and Yoda on earth</p>
            </div>
        </div>`,
    styles: [`
        .header {
            text-align: center;
            padding-top: 1rem;
            background-color: #f9f9f9;
        }
        
        .title {
            margin-bottom: 0;
            font-size: 2rem;
            font-weight: normal;
        }
        
        .description {
            font-size: 1.3rem;
            color: #999;
        }
        
        @media (min-width: 40em) {
            .title {
                font-size: 3.5rem;
            }
        }
    `]
})
export class HeaderContainer {
}