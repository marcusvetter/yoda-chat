describe('yoda chat', function() {
    it('should translate a message', function() {
        browser.get('http://localhost:8080');

        var jediMessage = 'Do you know what I am talking about?';
        var yodaMessage = 'Know what I am talking about, do you? Hmmm...? yes...';

        element(by.id('clear-chat-btn')).click();
        element(by.id('message-input')).sendKeys(jediMessage);
        element(by.id('message-send-btn')).click();

        var jediMessages = element.all(by.css('.message'));
        expect(jediMessages.count()).toEqual(1);
        expect(jediMessages.get(0).getText()).toEqual(jediMessage);

        element(by.id('yoda-tab')).click();
        var yodaMessages = element.all(by.css('.message'));
        expect(yodaMessages.count()).toEqual(1);
        expect(yodaMessages.get(0).getText()).toEqual(yodaMessage);
    });
});