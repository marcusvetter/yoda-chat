import {Component} from "angular2/core";
import {Chat} from "./chat/chat";
import {Tabs} from "./tabs/tabs";

@Component({
    selector: 'content-container',
    template: `<tabs></tabs>
               <chat></chat>`,
    directives: [Tabs, Chat]
})
export class ContentContainer {
}