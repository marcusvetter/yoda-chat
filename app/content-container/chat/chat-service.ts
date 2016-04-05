import {Injectable} from "angular2/core";
import {ChatMessage} from "./chat-message";
import {ChatMode} from "./../chat-mode";

@Injectable()
export class ChatService {

    private messages: Array<ChatMessage>;

    constructor() {
        this.messages = [
            new ChatMessage('Message Text 1', 'Some 1'),
            new ChatMessage('Message Text 2', 'Some 2'),
            new ChatMessage('Message Text 3', 'Some 3'),
            new ChatMessage('Message Text 4', 'Some 4'),
            new ChatMessage('Message Text 5', 'Some 5')
        ];
    }

    public getMessages(mode: ChatMode): Array<ChatMessage> {
        // TODO: Fetch messages
        return this.messages.map(m => this.convertMessage(mode, m));
    }

    public saveMessage(mode: ChatMode, message: string): void {
        this.messages.push(new ChatMessage(message, mode === ChatMode.YODA ? 'Yoda' : 'Jedi'));
    }

    // TODO: JUST FOR TEST PURPOSES!!
    private convertMessage(mode: ChatMode, chatMessage: ChatMessage): ChatMessage {
        chatMessage.text =  chatMessage.text && chatMessage.text.replace(/by.*$/, '') + ' by ' + mode;
        return chatMessage;
    }

}