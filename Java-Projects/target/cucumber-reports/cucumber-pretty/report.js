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
  "name": "02 Login and Add dress to cart",
  "description": "",
  "id": "login-and-add-dress-to-cart;02-login-and-add-dress-to-cart",
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
  "duration": 10021522186,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndAddDressToCartSteps.iAddexpensivedresstocart()"
});
formatter.result({
  "duration": 3047085756,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndAddDressToCartSteps.iLogOutandLoginagain()"
});
formatter.result({
  "duration": 3682799773,
  "status": "passed"
});
formatter.match({
  "location": "LoginAndAddDressToCartSteps.ishouldseepreviouslyaddeitemincart()"
});
formatter.result({
  "duration": 30580596,
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
  "name": "01 create a new account",
  "description": "",
  "id": "interact-with-automationpractice-site;01-create-a-new-account",
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
  "id": "interact-with-automationpractice-site;01-create-a-new-account;",
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
      "id": "interact-with-automationpractice-site;01-create-a-new-account;;1"
    },
    {
      "cells": [
        "abc2908201835@test.com",
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
      "id": "interact-with-automationpractice-site;01-create-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "01 create a new account",
  "description": "",
  "id": "interact-with-automationpractice-site;01-create-a-new-account;;2",
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
  "name": "I click on Create an account with \u0027abc2908201835@test.com\u0027",
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
  "duration": 6077459845,
  "status": "passed"
});
formatter.match({
  "location": "createAccount.iClickOnSignin()"
});
formatter.result({
  "duration": 1590336065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc2908201835@test.com",
      "offset": 35
    }
  ],
  "location": "createAccount.iClickOnCreateAnAccountWithEmail(String)"
});
formatter.result({
  "duration": 233695374,
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
  "duration": 20121612411,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"uniform-id_gender2\"}\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-PJNFBMD\u0027, ip: \u0027192.168.1.106\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\ANUSHA~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:61947}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.106, webStorageEnabled: true}\nSession ID: fff9e76962defb787b15975007077d1f\n*** Element info: {Using\u003dname, value\u003duniform-id_gender2}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:395)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.support.ByIdOrName.findElement(ByIdOrName.java:50)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat pages.Registration.Register(Registration.java:81)\r\n\tat stepdefs.createAccount.iFillTheRegistrationDetailsTitleFNameLNamePasswordDayMonthYearAddressCityStateZipMobile(createAccount.java:49)\r\n\tat ✽.And I fill the registration details \u0027NameA\u0027, \u0027NameB\u0027, \u0027Anusha21\u0027, \u002721\u0027, \u002710\u0027, \u00271990\u0027, \u0027AddressA\u0027, \u0027CityA\u0027, \u0027Hawaii\u0027, \u002700000\u0027, \u002707791111011\u0027(RegisterUser.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "createAccount.iMustRegisterWithAutomationpracticeSite()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "createAccount.i_should_be_able_to_SignOut()"
});
formatter.result({
  "status": "skipped"
});
});