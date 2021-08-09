package com.stepdefinitions.admin;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AccountCreation_StepDefinitions {


	@Given("^I want to write a step with \"([^\"]*)\"$")
	public void i_want_to_write_a_step_with(String name) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    System.out.println("Step with Name :"+name);
}

@When("^I check for the (\\d+) in step$")
public void i_check_for_the_in_step(int value) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
   System.out.println("Value :"+value);
}

@Then("^I verify the \"([^\"]*)\" in step$")
public void i_verify_the_in_step(String status) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    System.out.println("Status :"+status);
}
}
