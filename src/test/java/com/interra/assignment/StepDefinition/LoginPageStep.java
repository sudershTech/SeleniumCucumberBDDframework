package com.interra.assignment.StepDefinition;

import com.interra.assignment.PageObject.LoginPage;
import com.interra.assignment.Util.TestBase;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.util.List;

public class LoginPageStep extends TestBase {
    LoginPage lp;

    // User on login page
    @Given("^User is already on login page$")
    public void User_already_on_login_page(){
        TestBase.initialization();
    }

    // Verify title of login page
    @When("^Verify login page title as \"([^\"]*)\"$")
    public void Title_of_login_page(String LoginPageTitle){
        lp  = new LoginPage();
        lp.Verify_title_of_login_page(LoginPageTitle);
    }

    // Enter username
    @When("^User enters username as \"([^\"]*)\"$")
    public void User_Enter_Username(String username){
        lp.Enter_Username(username);
    }

    // Enter password
    @And("^User enters password as \"([^\"]*)\"$")
    public void User_Enter_Password(String password){
        lp.Enter_Password(password);
    }

    @When("^Enters username and password$")
    public void enters_username_and_password(DataTable credentials) {
     List<List<String>> data =  credentials.raw();
     lp.Enter_Username(data.get(0).get(0));
     lp.Enter_Password(data.get(0).get(1));
    }

    // Click on login button
    @And("^User click on login button$")
    public void Click_login_button(){
        lp.Click_login_button();
    }

    @Then("^Verify login error message as \"([^\"]*)\"$")
    public void verify_login_error_message(String errMsg)  {
        lp.Verify_login_error_msg(errMsg);
    }




}
