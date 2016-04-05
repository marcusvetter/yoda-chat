import {Component, Input, OnInit, AfterViewChecked, ViewChild, ElementRef} from "angular2/core";
import {Message} from "./message/message";
import {ChatMode} from "./chat-mode";
import {MessageInput} from "./message-input/message-input";
import {ChatService} from "./chat-service";
import {ChatMessage} from "./chat-message";

@Component({
    selector: 'chat',
    providers: [ChatService],
    template: `
        <div #scrollContainer class="container content-container">
            <div class="row">
                <div class="col-sm-8 yoda-chat-main">
                    <message *ngFor="#message of messages" text="{{message.yodaText}}" author="{{message.author}}"></message>
                </div>
            </div>
        </div>
        <message-input (onSendMessage)="onSendMessage($event)"></message-input>`,
    directives: [Message, MessageInput],
    styles: [`
        .container {
            max-width: 45rem;
        }
        
        .content-container {
            max-height: 490px;
            overflow-y: auto;
        }
    `]
})
export class Chat implements OnInit, AfterViewChecked {
    @Input() private mode:ChatMode;
    @ViewChild('scrollContainer') private scrollContainer:ElementRef;

    private messages:ChatMessage[];

    constructor(chatService: ChatService) {
        this.messages = chatService.getMessages();
    }

    ngOnInit() {
        this.scrollToBottom();
    }

    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    scrollToBottom():void {
        try {
            this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
        } catch (e) {
        }
    }

    onSendMessage(message:string):void {
        this.messages.push(new ChatMessage(message, message, this.mode === ChatMode.YODA ? 'Yoda' : 'A Jedi'));
    }
}