var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
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
        browser.get(CHAT_URL);
    }

    this.Given(/^As a human I open the chat with an empty message history$/, function (callback) {
        openChat();
        element(by.id(CLEAR_CHAT_BUTTON_ID)).click();
        callback();
    });

    this.Given(/^As a human I open the chat$/, function (callback) {
        openChat();
        callback();
    });

    this.When(/^As a Yoda I open the chat$/, function (callback) {
        openChat();
        element(by.id(YODA_TAB_ID)).click();
        callback();
    });

    this.When(/^I send the chat message "([^"]*)"$/, function (message, callback) {
        element(by.id(MESSAGE_INPUT_ID)).sendKeys(message);
        element(by.id(MESSAGE_SEND_BUTTON_ID)).click();
        callback();
    });

    this.Then(/^The message "([^"]*)" appears within the chat$/, function (expectedMessage, callback) {
        var messages = element.all(by.css('.' + MESSAGE_CLASS));
        expect(messages.count()).to.eventually.equal(1);
        expect(messages.get(0).getText()).to.eventually.equal(expectedMessage);
        callback();
    });
};