import {Component, Input} from "angular2/core";

@Component({
    selector: 'message',
    template: `
        <div class="yoda-chat-msg-container">
            <h2 class="yoda-chat-msg">{{ text }}</h2>
            <p class="yoda-chat-msg-meta">{{ date | date:'medium' }} by {{ author }}</p>
        </div>`,
    styles: [`
        .yoda-chat-msg-container {
          margin-bottom: 2.5rem;
        }
        
        .yoda-chat-msg {
          margin-bottom: .25rem;
          font-size: 1.5rem;
        }
        
        .yoda-chat-msg-meta {
          margin-bottom: 1.25rem;
          font-size: 1.2rem;
          color: #999;
        }`
    ]
})
export class Message {
    @Input() text:string;
    @Input() author:string;

    public date:Date = new Date();
}