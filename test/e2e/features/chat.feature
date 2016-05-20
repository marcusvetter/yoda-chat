Feature: Running Cucumber with Protractor
  As a user of the yoda chat
  I should be able to chat
  to ...

  Scenario: As a human I send a simple chat message to Yoda
    Given As a human I open the chat with an empty message history
    When I send the chat message "Simple Message"
    Then the message "Simple Message" appears within the chat

  Scenario: As a human I send a message that has to be translated for Yoda
    Given As a human I open the chat with an empty message history
    When I send the chat message "Do you know what I am talking about?"
    And As a Yoda I open the chat
    Then the message "Know what I am talking about, do you? Hmmm...? yes..." appears within the chat