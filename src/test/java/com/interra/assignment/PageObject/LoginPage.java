package com.interra.assignment.PageObject;

import com.interra.assignment.Util.TestBase;
import org.hamcrest.CoreMatchers;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class LoginPage extends TestBase {

    // Page Factory Object repo
    @FindBy(id = "username")
    WebElement Username;

    @FindBy(id = "password")
    WebElement Password;

    @FindBy(xpath = "//*[@value='Login']")
    WebElement LoginBtn;

    @FindBy(xpath = "/html/body/div/div/div/div[1]/div/section/div/div/div[1]/div/div[3]/div")
    WebElement LoginErrorMsg;

    // Initializing the page objects
    public LoginPage() {

        PageFactory.initElements(driver, this);
    }

    // Actions

    // Verify title of login page
    public void Verify_title_of_login_page(String LoginPageTitle) {
       // wait.until(ExpectedConditions.titleContains("Cloudfinder — Login"));
        String title = driver.getTitle();
        Assert.assertEquals(LoginPageTitle, title);
        System.out.println("Cloud Finder login page title verified successfully ");
    }

    // Enter username
    public void Enter_Username(String uname){
        Username.sendKeys(uname);
        System.out.println("User name entered successfully");
    }

    // Enter password
    public void Enter_Password(String pwd){
        Password.sendKeys(pwd);
        System.out.println("password entered successfully");
    }

    // Click on login button
    public void Click_login_button(){
        LoginBtn.click();
        System.out.println("Click on login Button");
    }

    public void Verify_login_error_msg(String errMsg) {
        // wait.until(ExpectedConditions.titleContains("Cloudfinder — Login"));
        String ErrorMessage = LoginErrorMsg.getText();
        Assert.assertThat(ErrorMessage, CoreMatchers.containsString(errMsg));
        System.out.println("Login error message verified successfully ");
        driver.close();
    }
}
