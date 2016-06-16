Feature: Yoda Chat
  As a user of the yoda chat
  I should be able to chat with humans/Yoda
  to stay in touch with them

  Scenario: As a human I send a simple chat message
    Given As a human I open the chat with an empty message history
    When I send the chat message "Simple Message"
    Then The message "Simple Message" appears within the chat

  Scenario: As a human I send a message that has to be translated for Yoda
    Given As a human I open the chat with an empty message history
    When I send the chat message "Do you know what I am talking about?"
    And I switch to the Yoda chat
    Then The message "Know what I am talking about, do you? Hmmm...? yes..." appears within the chat