var ChatPage = require('./../page-objects/chat-page');

module.exports = function () {
    
    var chatPage = new ChatPage();

    this.Given(/^As a human I open the chat with an empty message history$/, function (callback) {
        chatPage.openChat();
        chatPage.clearMessageHistory();
        callback();
    });

    this.Given(/^As a human I open the chat$/, function (callback) {
        chatPage.openChat();
        callback();
    });

    this.When(/^As a Yoda I open the chat$/, function (callback) {
        chatPage.openChat();
        chatPage.switchToYodaTab();
        callback();
    });

    this.When(/^I send the chat message "([^"]*)"$/, function (message, callback) {
        chatPage.sendMessage(message);
        callback();
    });

    this.Then(/^The message "([^"]*)" appears within the chat$/, function (expectedMessage, callback) {
        chatPage.verifyMessageExists(expectedMessage);
        callback();
    });

};