$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginAndAddDressToCart.feature");
formatter.feature({
  "line": 1,
  "name": "Login and Add dress to cart",
  "description": "",
  "id": "login-and-add-dress-to-cart",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login and Add dress to cart",
  "description": "",
  "id": "login-and-add-dress-to-cart;login-and-add-dress-to-cart",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I login",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I Add expensive dress to cart",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "LogOut and Login again",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I should see previously added item in cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginAndAddDressToCartSteps.ilogin()"
});
formatter.result({
  "duration": 12460849100,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndAddDressToCartSteps.iAddexpensivedresstocart()"
});
formatter.result({
  "duration": 3923090839,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndAddDressToCartSteps.iLogOutandLoginagain()"
});
formatter.result({
  "duration": 4820499211,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndAddDressToCartSteps.ishouldseepreviouslyaddeitemincart()"
});
formatter.result({
  "duration": 57074298,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[1]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat stepdefs.LoginAndAddDressToCartSteps.ishouldseepreviouslyaddeitemincart(LoginAndAddDressToCartSteps.java:54)\r\n\tat ✽.Then I should see previously added item in cart(LoginAndAddDressToCart.feature:7)\r\n",
  "status": "failed"
});
formatter.uri("RegisterUser.feature");
formatter.feature({
  "line": 1,
  "name": "Interact with automationpractice site",
  "description": "",
  "id": "interact-with-automationpractice-site",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "create a new account",
  "description": "",
  "id": "interact-with-automationpractice-site;create-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I want to create a new account with automationpractice",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on signin",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click on Create an account with \u0027\u003cemail\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I fill the registration details \u0027\u003cfName\u003e\u0027, \u0027\u003clName\u003e\u0027, \u0027\u003cpassword\u003e\u0027, \u0027\u003cday\u003e\u0027, \u0027\u003cmonth\u003e\u0027, \u0027\u003cyear\u003e\u0027, \u0027\u003cAddress\u003e\u0027, \u0027\u003cCity\u003e\u0027, \u0027\u003cState\u003e\u0027, \u0027\u003cZip\u003e\u0027, \u0027\u003cmobile\u003e\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I must register with automationpracticeSite",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should be able to SignOut",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "interact-with-automationpractice-site;create-a-new-account;",
  "rows": [
    {
      "cells": [
        "email",
        "fName",
        "lName",
        "password",
        "day",
        "month",
        "year",
        "Address",
        "City",
        "State",
        "Zip",
        "mobile"
      ],
      "line": 12,
      "id": "interact-with-automationpractice-site;create-a-new-account;;1"
    },
    {
      "cells": [
        "abc30082018@test.com",
        "NameA",
        "NameB",
        "Anusha21",
        "21",
        "10",
        "1990",
        "AddressA",
        "CityA",
        "Hawaii",
        "00000",
        "07791111011"
      ],
      "line": 13,
      "id": "interact-with-automationpractice-site;create-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "create a new account",
  "description": "",
  "id": "interact-with-automationpractice-site;create-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I want to create a new account with automationpractice",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on signin",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click on Create an account with \u0027abc30082018@test.com\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I fill the registration details \u0027NameA\u0027, \u0027NameB\u0027, \u0027Anusha21\u0027, \u002721\u0027, \u002710\u0027, \u00271990\u0027, \u0027AddressA\u0027, \u0027CityA\u0027, \u0027Hawaii\u0027, \u002700000\u0027, \u002707791111011\u0027",
  "matchedColumns": [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I must register with automationpracticeSite",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should be able to SignOut",
  "keyword": "And "
});
formatter.match({
  "location": "createAccount.iWantToCreateANewAccountWithAutomationpractice()"
});
formatter.result({
  "duration": 7132437221,
  "status": "passed"
});
formatter.match({
  "location": "createAccount.iClickOnSignin()"
});
formatter.result({
  "duration": 1689990523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc30082018@test.com",
      "offset": 35
    }
  ],
  "location": "createAccount.iClickOnCreateAnAccountWithEmail(String)"
});
formatter.result({
  "duration": 420763516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NameA",
      "offset": 33
    },
    {
      "val": "NameB",
      "offset": 42
    },
    {
      "val": "Anusha21",
      "offset": 51
    },
    {
      "val": "21",
      "offset": 63
    },
    {
      "val": "10",
      "offset": 69
    },
    {
      "val": "1990",
      "offset": 75
    },
    {
      "val": "AddressA",
      "offset": 83
    },
    {
      "val": "CityA",
      "offset": 95
    },
    {
      "val": "Hawaii",
      "offset": 104
    },
    {
      "val": "00000",
      "offset": 114
    },
    {
      "val": "07791111011",
      "offset": 123
    }
  ],
  "location": "createAccount.iFillTheRegistrationDetailsTitleFNameLNamePasswordDayMonthYearAddressCityStateZipMobile(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 5863012241,
  "status": "passed"
});
formatter.match({
  "location": "createAccount.iMustRegisterWithAutomationpracticeSite()"
});
formatter.result({
  "duration": 85610309,
  "status": "passed"
});
formatter.match({
  "location": "createAccount.i_should_be_able_to_SignOut()"
});
formatter.result({
  "duration": 1797276048,
  "status": "passed"
});
});