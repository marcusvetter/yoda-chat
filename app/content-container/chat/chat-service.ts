import {Injectable} from 'angular2/core';
import {ChatMessage} from "./chat-message";

@Injectable()
export class ChatService {

    public getMessages(): Array<ChatMessage> {
        return [
            new ChatMessage('Yoda Text1', 'Jedi Text1', 'Some1'),
            new ChatMessage('Yoda Text2', 'Jedi Text2', 'Some2'),
            new ChatMessage('Yoda Text3', 'Jedi Text3', 'Some3'),
            new ChatMessage('Yoda Text4', 'Jedi Text4', 'Some4'),
            new ChatMessage('Yoda Text5', 'Jedi Text5', 'Some5')
        ];
    }

}