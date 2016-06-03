var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function () {

    var CHAT_URL = 'http://localhost:8080',
        CLEAR_CHAT_BUTTON_ID = 'clear-chat-btn',
        MESSAGE_INPUT_ID = 'message-input',
        MESSAGE_SEND_BUTTON_ID = 'message-send-btn',
        MESSAGE_CLASS = 'message',
        YODA_TAB_ID = 'yoda-tab';

    function openChat() {
        return browser.get(CHAT_URL);
    }

    this.Given(/^As a human I open the chat with an empty message history$/, function () {
        openChat();
        return element(by.id(CLEAR_CHAT_BUTTON_ID)).click();
    });

    this.When(/^I switch to the Yoda chat$/, function () {
        return element(by.id(YODA_TAB_ID)).click();
    });

    this.When(/^I send the chat message "([^"]*)"$/, function (message) {
        element(by.id(MESSAGE_INPUT_ID)).sendKeys(message);
        return element(by.id(MESSAGE_SEND_BUTTON_ID)).click();
    });

    this.Then(/^The message "([^"]*)" appears within the chat$/, function (expectedMessage) {
        var messages = element.all(by.css('.' + MESSAGE_CLASS));
        expect(messages.count()).to.eventually.greaterThan(0);
        return expect(messages.get(0).getText()).to.eventually.equal(expectedMessage);
    });

};