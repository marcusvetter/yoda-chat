import {Injectable} from "angular2/core";
import {ChatMessage} from "./chat-message";
import {ChatMode} from "./../chat-mode";
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ChatService {

    private messages: Array<ChatMessage>;
    private static URL: string = 'http://localhost:3000/messages';

    constructor(private http: Http) {
        this.http.put(ChatService.URL, JSON.stringify(new ChatMessage('Message Text 1', 'Some 1', Date.now())));
        this.http.put(ChatService.URL, JSON.stringify(new ChatMessage('Message Text 2', 'Some 2', Date.now())));
        this.http.put(ChatService.URL, JSON.stringify(new ChatMessage('Message Text 3', 'Some 3', Date.now())));
        this.http.put(ChatService.URL, JSON.stringify(new ChatMessage('Message Text 4', 'Some 4', Date.now())));
        this.http.put(ChatService.URL, JSON.stringify(new ChatMessage('Message Text 5', 'Some 5', Date.now())));

        this.http.get(ChatService.URL).subscribe((resp: Response) => {
            this.messages = resp.json();
            console.log('FETCHED MESSAGES: ' + this.messages);
        });
    }

    public getMessages(mode: ChatMode): Observable<Response> {
        return this.http.get(ChatService.URL);
    }

    // private handleError (error: Response) {
    //     // in a real world app, we may send the error to some remote logging infrastructure
    //     // instead of just logging it to the console
    //     console.error(error);
    //     return Observable.throw(error.json().error || 'Server error');
    // }

    public saveMessage(mode: ChatMode, message: string): Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        let chatMessage: ChatMessage = new ChatMessage(message, mode === ChatMode.YODA ? 'Yoda' : 'Jedi', Date.now());
        return this.http.put(ChatService.URL, JSON.stringify(chatMessage), options);
    }

    // TODO: JUST FOR TEST PURPOSES!!
    private convertMessage(mode: ChatMode, chatMessage: ChatMessage): ChatMessage {
        chatMessage.text =  chatMessage.text && chatMessage.text.replace(/by.*$/, '') + ' by ' + mode;
        return chatMessage;
    }

}