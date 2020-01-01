@web
Feature: Search and restore users functionality

  Background:
    Given User is already on login page

  Scenario Outline:  Login failure of cloud finder

    When Verify login page title as "Cloudfinder — Login"
    When User enters username as "<username>"
    And User enters password as "<password>"
    And User click on login button
    Then Verify login error message as "Incorrect Username or Password!"

    Examples:
    | username                | password    |
    | sudersh120587@gmail.com | xyz         |
    | wrongUserName           | wrongPwd    |

  Scenario: Login and verify search and restore functionality of cloud finder

    When Verify login page title as "Cloudfinder — Login"
    When User enters username as "sudersh120587@gmail.com"
    And User enters password as "Noida@1234"
    And User click on login button
    Then Verify title of  dashboard page as "Cloudfinder — Dashboard"
    # Testing Search functionality
    Then Enter "Sudersh" in SearchTextBox and hit enter
    Then Get text of first item found
    # Testing Restore functionality
    Then Click the check box
    And Click action button
    Then Click on restore option
    Then Select target as "Sudersh"
    Then Click on proceed button
    And Click on restore button
    # Tracking progress of the Restore
    Then Click on Reports tab
    And Click on restore heading tab
    Then Get status of scheduled restore
    And Close the browser