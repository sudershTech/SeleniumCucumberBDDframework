package com.interra.assignment.StepDefinition;

import com.interra.assignment.PageObject.HomePage;
import com.interra.assignment.Util.TestBase;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;

public class HomePageStep extends TestBase {
     HomePage homepage;

    // Verify post login dashboard title
    @Then("^Verify title of  dashboard page as \"([^\"]*)\"$")
    public void Verify_Dashboard_Title(String DashboardTitle){
        homepage = new HomePage();
        homepage.Verify_Title_Homepage(DashboardTitle);
    }

    // Enters user name in search box
    @Then("^Enter \"([^\"]*)\" in SearchTextBox and hit enter$")
    public void  Enter_name_of_user(String name){
        homepage.Enter_name_of_user(name);
    }

    // Get and print text of first item found
    @Then("^Get text of first item found$")
    public void  Item_found() {
        homepage.Item_found_text();
    }

    // Click on checkbox against first ite to restore
    @Then("^Click the check box$")
    public void CheckBox_present(){
        homepage.Click_CheckBox();
    }

    // Click on action button
    @And("^Click action button$")
    public void Click_action_button(){
       homepage.Click_action_button();
    }

    // click on restore
    @Then("^Click on restore option$")
    public void Click_restore(){
        //wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//div[@class='dropdown open']//a[@class='ng-binding'][contains(text(),'Restore')]")));
        homepage.Click_restore();
        System.out.println("Clicked on restore successfully");
    }

    // Select the target user to restore
    @Then("^Select target as \"([^\"]*)\"$")
    public void Select_user(String user) throws InterruptedException {
       homepage.Select_restore_user(user);
    }

    // Click on Proceed Button
    @Then("^Click on proceed button$")
    public void Click_proceed(){
       homepage.Click_proceed();
    }

    // Click on restore button
    @And("^Click on restore button$")
    public void Click_restore_button(){
       homepage.Click_restore_button();
    }

    // Click on Reports tab on left side of UI
    @Then("^Click on Reports tab$")
    public void Click_reports() throws InterruptedException {
       homepage.Click_reports_tab();
    }

    // Click on restore heading tab
    @And("^Click on restore heading tab$")
    public void Click_restore_tab() throws InterruptedException {
        homepage.Click_restore_tab();
    }

    // Get and print the status of latest restore
    @Then("^Get status of scheduled restore$")
    public void Get_status_restore() throws InterruptedException {
      homepage.Get_status_restore();
    }
    @And("^Close the browser$")
    public void Close_browser()
    {
        driver.close();
    }


}
