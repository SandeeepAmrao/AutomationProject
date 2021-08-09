$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/featurefiles/admin/createAccount.feature");
formatter.feature({
  "name": "Account Creation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AllExecute"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Account Creation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I want to write a step with \"\u003cname\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "I check for the \u003cvalue\u003e in step",
  "keyword": "When "
});
formatter.step({
  "name": "I verify the \"\u003cstatus\u003e\" in step",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "value",
        "status"
      ]
    },
    {
      "cells": [
        "name1",
        "5",
        "success"
      ]
    },
    {
      "cells": [
        "name2",
        "7",
        "Fail"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Account Creation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AllExecute"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I want to write a step with \"name1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountCreation_StepDefinitions.i_want_to_write_a_step_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check for the 5 in step",
  "keyword": "When "
});
formatter.match({
  "location": "AccountCreation_StepDefinitions.i_check_for_the_in_step(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"success\" in step",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountCreation_StepDefinitions.i_verify_the_in_step(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Account Creation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AllExecute"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "I want to write a step with \"name2\"",
  "keyword": "Given "
});
formatter.match({
  "location": "AccountCreation_StepDefinitions.i_want_to_write_a_step_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check for the 7 in step",
  "keyword": "When "
});
formatter.match({
  "location": "AccountCreation_StepDefinitions.i_check_for_the_in_step(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"Fail\" in step",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountCreation_StepDefinitions.i_verify_the_in_step(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "browser open successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@AllExecute"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "launch browser",
  "keyword": "When "
});
formatter.match({
  "location": "Admin_StepDefinitions.launch_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/featurefiles/admin/openBrowser.feature");
formatter.feature({
  "name": "Open Browser",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "browser open successfully",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "launch browser",
  "keyword": "When "
});
formatter.match({
  "location": "Admin_StepDefinitions.launch_browser()"
});
formatter.result({
  "status": "passed"
});
});