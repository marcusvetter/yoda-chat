var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

function ChatPage() {

    var CHAT_URL = 'http://localhost:8080',
        CLEAR_CHAT_BUTTON_ID = 'clear-chat-btn',
        MESSAGE_INPUT_ID = 'message-input',
        MESSAGE_SEND_BUTTON_ID = 'message-send-btn',
        MESSAGE_CLASS = 'message',
        YODA_TAB_ID = 'yoda-tab';

    this.openChat = function() {
        browser.get(CHAT_URL);
    };

    this.clearMessageHistory = function() {
        element(by.id(CLEAR_CHAT_BUTTON_ID)).click();
    };

    this.switchToYodaTab = function() {
        element(by.id(YODA_TAB_ID)).click();
    };

    this.sendMessage = function(message) {
        element(by.id(MESSAGE_INPUT_ID)).sendKeys(message);
        element(by.id(MESSAGE_SEND_BUTTON_ID)).click();
    };

    this.verifyMessageExists = function (message) {
        var messages = element.all(by.css('.' + MESSAGE_CLASS));
        expect(messages.count()).to.eventually.equal(1);
        expect(messages.get(0).getText()).to.eventually.equal(message);
    };

}

module.exports = ChatPage;