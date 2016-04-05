import {Component, Output, EventEmitter} from "angular2/core";

@Component({
    selector: 'message-input',
    template: `
        <div class="input-container">
            <div class="container">
                <div class="input-group">
                    <input #message (keyup.enter)="sendMessage(message)" type="text" placeholder="Your message..." class="form-control"/>
                    <span class="input-group-btn">
                        <button (click)="sendMessage(message)" type="button" class="btn btn-secondary">Send</button>
                    </span>
                </div>
            </div>
        </div>`,
    styles: [`
        .container {
            max-width: 45rem;
        }
        .input-container {
            background-color: #f9f9f9;
            -webkit-box-shadow: inset 0 -0.1rem 0.25rem rgba(0, 0, 0, 0.1);
            box-shadow: inset 0 -0.1rem 0.25rem rgba(0, 0, 0, 0.1);
            height: 60px;
            padding-top: 12px;
        }`
    ]
})
export class MessageInput {
    @Output() onSendMessage = new EventEmitter();

    public sendMessage(inputElem: HTMLInputElement): void {
        this.onSendMessage.emit(inputElem.value);
        inputElem.value = null;
    }
}