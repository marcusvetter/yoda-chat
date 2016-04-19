Feature: Running Cucumber with Protractor
  As a user of the yoda chat
  I should be able to chat
  to ...

  Scenario: I enter a simple chat message
    Given I open the Yoda Chat with an empty message history
    When I switch to the jedi tab
    And I type the chat message "Simple Message"
    And send the message
    Then the message "Simple Message" appears within the chat

  Scenario: I enter a complex chat message
    Given I open the Yoda Chat with an empty message history
    When I switch to the jedi tab
    And I type the chat message "Do you know what I am talking about?"
    And send the message
    And I switch to the yoda tab
    Then the message "Know what I am talking about, do you? Hmmm...? yes..." appears within the chat