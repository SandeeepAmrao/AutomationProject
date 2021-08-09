package com.stepdefinitions.admin;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.When;

public class Admin_StepDefinitions {
	public static WebDriver driver = null;
	
	@When("^launch browser$")
	public void launch_browser() throws Exception {
	    // Write code here that turns the phrase above into concrete actions
	    try {
	    	System.setProperty("webdriver.chrome.driver", "F:\\Automation\\workplace\\CucumberProject\\src\\main\\resources\\testdata\\chromedriver.exe");
			driver = new ChromeDriver();
			driver.get("http://www.google.com");
		} catch (Exception e) {
			// TODO: handle exception
		}
	}


}
