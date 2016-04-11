import {bootstrap} from "angular2/platform/browser";
import {HTTP_PROVIDERS} from "angular2/http";
import {YodaChat} from "./yoda-chat.ts";

require('bootstrap/dist/css/bootstrap.css');

bootstrap(YodaChat, [HTTP_PROVIDERS]);