@Login
Feature: Cloud finder login success testing
# I have created this feature file basically to implement data table functionality
  Background:
    Given User is already on login page
  Scenario: Login success test of cloud finder
    When Verify login page title as "Cloudfinder — Login"
    When Enters username and password
    | sudersh120587@gmail.com | Noida@1234 |
    And User click on login button
    Then Verify title of  dashboard page as "Cloudfinder — Dashboard"




