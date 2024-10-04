Feature: Redirect From Home Page If Not Logged in

  Scenario: Visiting home page while not logged in
    Given I am not logged in and on the home page
    Then I get redirected to /login
