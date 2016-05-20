import {Injectable} from "angular2/core";
import {ChatMessage} from "./chat-message";
import {ChatMode} from "./../chat-mode";
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx'; // RxJS operators

@Injectable()
export class ChatService {

    private static URL: string = 'http://localhost:3000/messages';

    private requestOptions: RequestOptions;

    constructor(private http: Http) {
        let requestHeaders = new Headers({
            'Content-Type': 'application/json'
        });
        this.requestOptions = new RequestOptions({
            headers: requestHeaders
        });
    }

    public getMessages(mode: ChatMode): Observable<ChatMessage[]> {
        return this.http
            .get(`${ChatService.URL}?mode=${mode}`)
            .map((resp: Response) => <ChatMessage[]> resp.json());
    }

    public saveMessage(mode: ChatMode, message: string): Observable<Response> {
        let chatMessage: ChatMessage = new ChatMessage(message, mode === ChatMode.YODA ? 'Yoda' : 'a human', Date.now());
        return this.http.put(`${ChatService.URL}?mode=${mode}`, JSON.stringify(chatMessage), this.requestOptions);
    }

    public deleteAllMessages(): Observable<Response> {
        return this.http.delete(ChatService.URL);
    }
}