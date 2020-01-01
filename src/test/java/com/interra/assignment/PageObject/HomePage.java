package com.interra.assignment.PageObject;

import com.interra.assignment.Util.TestBase;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class HomePage extends TestBase {

    @FindBy(xpath="//input[@type='search']")
    WebElement SearchBox;

    @FindBy(xpath = "//body//tr[1]//tr[1]//td[3]")
    WebElement Item_Text;

    @FindBy(xpath = "//body//tr[1]//tr[1]//td[1]//input[1]")
    WebElement Item_Checkbox;

    @FindBy(css = "div.dropdown > button.btn.btn-default.btn-xs.dropdown-toggle.ng-binding")
    WebElement Action_Button;

    @FindBy(xpath = "//div[@class='dropdown open']//a[@class='ng-binding'][contains(text(),'Restore')]")
    WebElement Restore;

    @FindBy(xpath = "//span[@class='select2-chosen'][contains(text(),'Select One')]")
    WebElement RestoreToUser;

    @FindBy(xpath = "/html[1]/body[1]/div[5]/div[1]/input[1]")
    WebElement RestoreToUserTextBox;

    @FindBy(xpath = "//span[@class='select2-match']")
    WebElement ClickRestoreMatch;

    @FindBy(xpath = "//button[@class='btn btn-primary btn-xs']")
    WebElement ProceedButton;

    @FindBy(xpath = "//button[@class='btn btn-primary btn-xs'][contains(text(),'Restore')]")
    WebElement RestoreButton;

    @FindBy(xpath = "//div[@class='modal fade ng-isolate-scope in']")
    WebElement CloseButton;

    @FindBy(xpath = "//span[contains(text(),'Reports')]")
    WebElement ReportsTab;

    @FindBy(xpath = "//a[contains(text(),'Restore')]")
    WebElement RestoreTab;

    @FindBy(xpath = "//tr[1]//td[6]//p[1]//span[1]")
    WebElement RestoreStatus;


    // Initializing the page objects
    public HomePage() {

        PageFactory.initElements(driver, this);
    }

    // Actions

    // Verify title of Home page
    public void Verify_Title_Homepage(String DashboardTitle){
        // Using explicit wait
        TestBase.wait.until(ExpectedConditions.titleContains("Cloudfinder — Dashboard"));
        String title = driver.getTitle();
        Assert.assertEquals(DashboardTitle, title);
        System.out.println("Cloud Finder post login dashboard page title is verified successfully ");
    }

    // Enter username in SearchBox
    public void  Enter_name_of_user(String name){
        //wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@type='search']")));
        SearchBox.sendKeys(name);
        SearchBox.sendKeys(Keys.ENTER);
        System.out.println("Enter user name in search text box  and hit enter successfully");
    }

    // Found and print item text
    public void  Item_found_text() {
        //wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//body//tr[1]//tr[1]//td[3]")));
        System.out.println(Item_Text);
        System.out.println("Item found to the respective user search");
    }

    // Click checkbox
    public void Click_CheckBox(){
        Assert.assertTrue(Item_Checkbox.isEnabled());
        Item_Checkbox.click();
        System.out.println("Check box clicked against that item successfully");
    }
    // Click action button
    public void Click_action_button(){
        Action_Button.click();
        System.out.println("Clicked on action button successfully");
    }

    // Click Restore
    public void Click_restore(){
        //wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//div[@class='dropdown open']//a[@class='ng-binding'][contains(text(),'Restore')]")));
        Restore.click();
        System.out.println("Clicked on restore successfully");
    }

    public void Select_restore_user(String user) throws InterruptedException {
        //wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//span[@class='select2-chosen'][contains(text(),'Select One')]")));
        RestoreToUser.click();
        RestoreToUserTextBox.click();
        RestoreToUserTextBox.sendKeys(user);
        //wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[@class='select2-match']")));
        ClickRestoreMatch.click();
        System.out.println("Enter and select target user successfully");
    }

    public void Click_proceed(){
        ProceedButton.click();
        System.out.println("Clicked on proceed button successfully");
    }

    public void Click_restore_button(){
        RestoreButton.click();
        CloseButton.click();
        System.out.println("Clicked on restore button successfully");
    }

    public void Click_reports_tab() throws InterruptedException {
        Thread.sleep(3000);
        ReportsTab.click();
        System.out.println("Clicked on Reports tab on left side of UI successfully");
    }

    public void Click_restore_tab() throws InterruptedException {
        Thread.sleep(2000);
        RestoreTab.click();
        System.out.println("Clicked restore header tab successfully");
    }

    public void Get_status_restore() throws InterruptedException {
        Thread.sleep(2000);
        RestoreStatus.getText();
        System.out.println("Get restore status text successfully");
    }

}
