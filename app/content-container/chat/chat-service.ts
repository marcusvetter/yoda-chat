import {Injectable} from "angular2/core";
import {ChatMessage} from "./chat-message";
import {ChatMode} from "./chat-mode";

@Injectable()
export class ChatService {

    private messages: Array<ChatMessage>;

    constructor() {
        this.messages = [
            new ChatMessage('Yoda Text1', 'Jedi Text1', 'Some1'),
            new ChatMessage('Yoda Text2', 'Jedi Text2', 'Some2'),
            new ChatMessage('Yoda Text3', 'Jedi Text3', 'Some3'),
            new ChatMessage('Yoda Text4', 'Jedi Text4', 'Some4'),
            new ChatMessage('Yoda Text5', 'Jedi Text5', 'Some5')
        ];
    }

    public getMessages(): Array<ChatMessage> {
        return this.messages;
    }

    public saveMessage(mode: ChatMode, message: string): void {
        let author: string,
            jediMessage: string,
            yodaMessage: string;

        if (mode === ChatMode.YODA) {
            yodaMessage = message;
            jediMessage = this.translateMessageToJediMessage(message);
            author = 'Yoda';
        } else {
            yodaMessage = this.translateMessageToYodaMessage(message);
            jediMessage = message;
            author = 'Jedi';
        }
        this.messages.push(new ChatMessage(yodaMessage, jediMessage, author));
    }

    private translateMessageToYodaMessage(message: string): string {
        // TODO: Translate to yoda message
        return message;
    }

    private translateMessageToJediMessage(message: string): string {
        // TODO: Translate to jedi message
        return message;
    }

}