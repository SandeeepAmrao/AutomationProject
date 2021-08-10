$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/featurefiles/admin/openBrowser.feature");
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