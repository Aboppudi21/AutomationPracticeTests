Feature: Interact with automationpractice site

  Scenario Outline: create a new account
    Given I want to create a new account with automationpractice
    When I click on signin
    And I click on Create an account with '<email>'
    And I fill the registration details '<fName>', '<lName>', '<password>', '<day>', '<month>', '<year>', '<Address>', '<City>', '<State>', '<Zip>', '<mobile>'
    Then I must register with automationpracticeSite
    And I should be able to SignOut

    Examples:
      | email                | fName | lName | password | day | month | year | Address  | City  | State  | Zip   | mobile      |
      | abc300820181@test.com | NameA | NameB | Anusha21 | 21  | 10    | 1990 | AddressA | CityA | Hawaii | 00000 | 07791111011 |




