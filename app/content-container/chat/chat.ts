import {
    Component,
    Input,
    OnInit,
    AfterViewChecked,
    ViewChild,
    ElementRef,
    OnChanges,
    SimpleChange
} from "angular2/core";
import {Message} from "./message/message";
import {ChatMode} from "./../chat-mode";
import {MessageInput} from "./message-input/message-input";
import {ChatService} from "./chat-service";
import {ChatMessage} from "./chat-message";
import {Response} from "angular2/http";

@Component({
    selector: 'chat',
    providers: [ChatService],
    template: `
        <div #scrollContainer class="container content-container">
            <div class="row">
                <div class="col-sm-8 yoda-chat-main">
                    <message *ngFor="#message of messages" [text]="message.text" [author]="message.author" [date]="message.date"></message>
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
export class Chat implements OnInit, AfterViewChecked, OnChanges {
    @Input() mode: ChatMode;
    @ViewChild('scrollContainer') private scrollContainer: ElementRef;

    private messages: ChatMessage[];

    constructor(private chatService: ChatService) {
    }

    refreshMessages(): void {
        this.chatService.getMessages(this.mode)
            .subscribe((resp: Response) => this.messages = <ChatMessage[]> resp.json());
    }

    ngOnInit(): void {
        this.scrollToBottom();
    }

    ngAfterViewChecked(): void {
        this.scrollToBottom();
    }

    scrollToBottom(): void {
        try {
            this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
        } catch (e) {
        }
    }

    ngOnChanges(changes: {[propName: string]: SimpleChange}) {
        this.refreshMessages();
    }

    onSendMessage(message: string): void {
        this.chatService
            .saveMessage(this.mode, message)
            .subscribe(() => this.refreshMessages());
    }
}