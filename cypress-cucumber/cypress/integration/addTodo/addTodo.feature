Feature: Add Todo

Scenario: Adding a new todo
  Given I visit the main page while logged in
  When I enter title "My Todo Title" and content "This is my todo content"
  Then it shows up
