package com.testrunners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"src/test/resources/featurefiles"},
	//	plugin = {"pretty","html:target/cucumber-html-report","json:target/cucumber-reports/cucumber.json","junit:target/cucumber-reports/cucumber.xml"},
				plugin = {"pretty", "html:target/cucumber-html-report","json:target/cucumber.json"},
		tags = {"@Regression"},
		glue = {"com.stepdefinitions."},
		dryRun = false,
		monochrome = true
	
)
public class TestRunTest {}
