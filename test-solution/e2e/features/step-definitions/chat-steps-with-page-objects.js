var ChatPage = require('./../page-objects/chat-page');

module.exports = function () {

    var chatPage = new ChatPage();

    this.Given(/^As a human I open the chat with an empty message history$/, function () {
        chatPage.openChat();
        return chatPage.clearMessageHistory();
    });

    this.Given(/^As a human I open the chat$/, function () {
        return chatPage.openChat();
    });

    this.When(/^As a Yoda I open the chat$/, function () {
        return chatPage.switchToYodaTab();
    });

    this.When(/^I send the chat message "([^"]*)"$/, function (message) {
        return chatPage.sendMessage(message);
    });

    this.Then(/^The message "([^"]*)" appears within the chat$/, function (expectedMessage) {
        return chatPage.verifyMessageExists(expectedMessage);
    });

};