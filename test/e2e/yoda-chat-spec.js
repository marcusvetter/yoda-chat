describe('yoda chat', function() {

    var CLEAR_CHAT_BUTTON_ID = 'clear-chat-btn',
        MESSAGE_INPUT_ID = 'message-input',
        MESSAGE_SEND_BUTTON_ID = 'message-send-btn',
        MESSAGE_CLASS = 'message',
        YODA_TAB_ID = 'yoda-tab';
    
    it('should translate a message', function() {
        browser.get('http://localhost:8080');

        var jediMessage = 'Do you know what I am talking about?';
        var yodaMessage = 'Know what I am talking about, do you? Hmmm...? yes...';

        element(by.id(CLEAR_CHAT_BUTTON_ID)).click();
        element(by.id(MESSAGE_INPUT_ID)).sendKeys(jediMessage);
        element(by.id(MESSAGE_SEND_BUTTON_ID)).click();

        var jediMessages = element.all(by.css('.' + MESSAGE_CLASS));
        expect(jediMessages.count()).toEqual(1);
        expect(jediMessages.get(0).getText()).toEqual(jediMessage);

        element(by.id(YODA_TAB_ID)).click();
        var yodaMessages = element.all(by.css('.' + MESSAGE_CLASS));
        expect(yodaMessages.count()).toEqual(1);
        expect(yodaMessages.get(0).getText()).toEqual(yodaMessage);
    });
});