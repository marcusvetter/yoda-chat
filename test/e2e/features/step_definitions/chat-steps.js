var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function() {

    var CLEAR_CHAT_BUTTON_ID = 'clear-chat-btn',
        MESSAGE_INPUT_ID = 'message-input',
        MESSAGE_SEND_BUTTON_ID = 'message-send-btn',
        MESSAGE_CLASS = 'message',
        JEDI_TAB_ID = 'jedi-tab',
        YODA_TAB_ID = 'yoda-tab';

    this.Given(/^I open the Yoda Chat with an empty message history$/, function (callback) {
        browser.get('http://localhost:8080');
        element(by.id(CLEAR_CHAT_BUTTON_ID)).click();
        callback();
    });

    this.When(/^I switch to the yoda tab$/, function(callback) {
        element(by.id(YODA_TAB_ID)).click();
        callback();
    });

    this.When(/^I switch to the jedi tab$/, function(callback) {
        element(by.id(JEDI_TAB_ID)).click();
        callback();
    });

    this.When(/^I type the chat message "([^"]*)"$/, function (message, callback) {
        element(by.id(MESSAGE_INPUT_ID)).sendKeys(message);
        callback();
    });

    this.When(/^send the message$/, function (callback) {
        element(by.id(MESSAGE_SEND_BUTTON_ID)).click();
        callback();
    });

    this.Then(/^the message "([^"]*)" appears within the chat$/, function (expectedMessage, callback) {
        var messages = element.all(by.css('.' + MESSAGE_CLASS));
        expect(messages.count()).to.eventually.equal(1);
        expect(messages.get(0).getText()).to.eventually.equal(expectedMessage);
        callback();
    });
};