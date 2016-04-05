import {Component, Input} from "angular2/core";

@Component({
    selector: 'message',
    template: `
        <div class="message-container">
            <h2 class="message">{{ text }}</h2>
            <p class="message-meta">{{ date | date:'medium' }} by {{ author }}</p>
        </div>`,
    styles: [`
        .message-container {
          margin-bottom: 2.5rem;
        }
        
        .message {
          margin-bottom: .25rem;
          font-size: 1.5rem;
        }
        
        .message-meta {
          margin-bottom: 1.25rem;
          font-size: 1.2rem;
          color: #999;
        }`
    ]
})
export class Message {
    @Input() text: string;
    @Input() author: string;

    public date: Date = new Date();
}