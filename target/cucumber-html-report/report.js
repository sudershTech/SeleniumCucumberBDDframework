$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CloudFinder.feature");
formatter.feature({
  "line": 2,
  "name": "Search and restore users functionality",
  "description": "",
  "id": "search-and-restore-users-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Login failure of cloud finder",
  "description": "",
  "id": "search-and-restore-users-functionality;login-failure-of-cloud-finder",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "Verify login page title as \"Cloudfinder — Login\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify login error message as \"Incorrect Username or Password!\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "search-and-restore-users-functionality;login-failure-of-cloud-finder;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "search-and-restore-users-functionality;login-failure-of-cloud-finder;;1"
    },
    {
      "cells": [
        "sudersh120587@gmail.com",
        "xyz"
      ],
      "line": 17,
      "id": "search-and-restore-users-functionality;login-failure-of-cloud-finder;;2"
    },
    {
      "cells": [
        "wrongUserName",
        "wrongPwd"
      ],
      "line": 18,
      "id": "search-and-restore-users-functionality;login-failure-of-cloud-finder;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.User_already_on_login_page()"
});
formatter.result({
  "duration": 13099759200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login failure of cloud finder",
  "description": "",
  "id": "search-and-restore-users-functionality;login-failure-of-cloud-finder;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Verify login page title as \"Cloudfinder — Login\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters username as \"sudersh120587@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters password as \"xyz\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify login error message as \"Incorrect Username or Password!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Cloudfinder — Login",
      "offset": 28
    }
  ],
  "location": "LoginPageStep.Title_of_login_page(String)"
});
formatter.result({
  "duration": 74633500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sudersh120587@gmail.com",
      "offset": 25
    }
  ],
  "location": "LoginPageStep.User_Enter_Username(String)"
});
formatter.result({
  "duration": 384850900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz",
      "offset": 25
    }
  ],
  "location": "LoginPageStep.User_Enter_Password(String)"
});
formatter.result({
  "duration": 221000600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStep.Click_login_button()"
});
formatter.result({
  "duration": 4411660500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Incorrect Username or Password!",
      "offset": 31
    }
  ],
  "location": "LoginPageStep.verify_login_error_message(String)"
});
formatter.result({
  "duration": 2545491500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.User_already_on_login_page()"
});
formatter.result({
  "duration": 7708459000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Login failure of cloud finder",
  "description": "",
  "id": "search-and-restore-users-functionality;login-failure-of-cloud-finder;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Verify login page title as \"Cloudfinder — Login\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters username as \"wrongUserName\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters password as \"wrongPwd\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify login error message as \"Incorrect Username or Password!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Cloudfinder — Login",
      "offset": 28
    }
  ],
  "location": "LoginPageStep.Title_of_login_page(String)"
});
formatter.result({
  "duration": 20122500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wrongUserName",
      "offset": 25
    }
  ],
  "location": "LoginPageStep.User_Enter_Username(String)"
});
formatter.result({
  "duration": 245333700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wrongPwd",
      "offset": 25
    }
  ],
  "location": "LoginPageStep.User_Enter_Password(String)"
});
formatter.result({
  "duration": 189607600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStep.Click_login_button()"
});
formatter.result({
  "duration": 5074952700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Incorrect Username or Password!",
      "offset": 31
    }
  ],
  "location": "LoginPageStep.verify_login_error_message(String)"
});
formatter.result({
  "duration": 679439400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.User_already_on_login_page()"
});
formatter.result({
  "duration": 7821217200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login and verify search and restore functionality of cloud finder",
  "description": "",
  "id": "search-and-restore-users-functionality;login-and-verify-search-and-restore-functionality-of-cloud-finder",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "Verify login page title as \"Cloudfinder — Login\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enters username as \"sudersh120587@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "User enters password as \"Noida@1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Verify title of  dashboard page as \"Cloudfinder — Dashboard\"",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 27,
      "value": "# Testing Search functionality"
    }
  ],
  "line": 28,
  "name": "Enter \"Sudersh\" in SearchTextBox and hit enter",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Get text of first item found",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 30,
      "value": "# Testing Restore functionality"
    }
  ],
  "line": 31,
  "name": "Click the check box",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Click action button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Click on restore option",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Select target as \"Sudersh\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Click on proceed button",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Click on restore button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 37,
      "value": "# Tracking progress of the Restore"
    }
  ],
  "line": 38,
  "name": "Click on Reports tab",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Click on restore heading tab",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Get status of scheduled restore",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Cloudfinder — Login",
      "offset": 28
    }
  ],
  "location": "LoginPageStep.Title_of_login_page(String)"
});
formatter.result({
  "duration": 20687400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sudersh120587@gmail.com",
      "offset": 25
    }
  ],
  "location": "LoginPageStep.User_Enter_Username(String)"
});
formatter.result({
  "duration": 410693500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Noida@1234",
      "offset": 25
    }
  ],
  "location": "LoginPageStep.User_Enter_Password(String)"
});
formatter.result({
  "duration": 285343200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStep.Click_login_button()"
});
formatter.result({
  "duration": 3626613000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cloudfinder — Dashboard",
      "offset": 36
    }
  ],
  "location": "HomePageStep.Verify_Dashboard_Title(String)"
});
formatter.result({
  "duration": 711745000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sudersh",
      "offset": 7
    }
  ],
  "location": "HomePageStep.Enter_name_of_user(String)"
});
formatter.result({
  "duration": 690073900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.Item_found()"
});
formatter.result({
  "duration": 993050900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.CheckBox_present()"
});
formatter.result({
  "duration": 291657100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.Click_action_button()"
});
formatter.result({
  "duration": 180753100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.Click_restore()"
});
formatter.result({
  "duration": 304781600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sudersh",
      "offset": 18
    }
  ],
  "location": "HomePageStep.Select_user(String)"
});
formatter.result({
  "duration": 11412677700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.Click_proceed()"
});
formatter.result({
  "duration": 116309600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.Click_restore_button()"
});
formatter.result({
  "duration": 208495200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.Click_reports()"
});
formatter.result({
  "duration": 3204172300,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.Click_restore_tab()"
});
formatter.result({
  "duration": 2405368400,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.Get_status_restore()"
});
formatter.result({
  "duration": 2075362500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStep.Close_browser()"
});
formatter.result({
  "duration": 384959400,
  "status": "passed"
});
formatter.uri("LoginSuccess.feature");
formatter.feature({
  "line": 2,
  "name": "Cloud finder login success testing",
  "description": "",
  "id": "cloud-finder-login-success-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.background({
  "comments": [
    {
      "line": 3,
      "value": "# I have created this feature file basically to implement data table functionality"
    }
  ],
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.User_already_on_login_page()"
});
formatter.result({
  "duration": 7818646500,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Login success test of cloud finder",
  "description": "",
  "id": "cloud-finder-login-success-testing;login-success-test-of-cloud-finder",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Verify login page title as \"Cloudfinder — Login\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Enters username and password",
  "rows": [
    {
      "cells": [
        "sudersh120587@gmail.com",
        "Noida@1234"
      ],
      "line": 9
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Verify title of  dashboard page as \"Cloudfinder — Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Cloudfinder — Login",
      "offset": 28
    }
  ],
  "location": "LoginPageStep.Title_of_login_page(String)"
});
formatter.result({
  "duration": 19527400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStep.enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 627311700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageStep.Click_login_button()"
});
formatter.result({
  "duration": 3164665500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cloudfinder — Dashboard",
      "offset": 36
    }
  ],
  "location": "HomePageStep.Verify_Dashboard_Title(String)"
});
formatter.result({
  "duration": 622745000,
  "status": "passed"
});
});