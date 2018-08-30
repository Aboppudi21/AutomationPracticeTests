Feature: Login and Add dress to cart

  Scenario: Login and Add dress to cart
    Given I login
    When I Add expensive dress to cart
    And LogOut and Login again
    Then I should see previously added item in cart