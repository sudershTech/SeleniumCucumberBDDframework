package com.interra.assignment.Util;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class TestBase {
    // Global static variable defined to use in child classes
    public static WebDriver driver;
    public static Properties prop;
    public static WebDriverWait wait;
   // public static WebDriverWait wait = new WebDriverWait(driver,15);;


// Constructor to read the properties from properties file
    public TestBase(){
        try{
            prop = new Properties();
            FileInputStream fis= new FileInputStream("E:/cloudfinder/src/test/java/com/interra/assignment/Config/config.properties");
            prop.load(fis);
        } catch (IOException e){
            e.getMessage();
        }
    }

    // We are using static method so that we can call this method by class name only
    public static void initialization(){
        String BrowserName= prop.getProperty("browser");

        if (BrowserName.equals("chrome")){
            System.setProperty("webdriver.chrome.driver","E:/cloudfinder/Resources/Selenium/Drivers/chromedriver.exe");
            driver = new ChromeDriver();
        }
        else if(BrowserName.equals("firefox")){
            System.setProperty("webdriver.gecko.driver","E:/cloudfinder/Resources/Selenium/Drivers/geckodriver.exe");
        }

        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
        wait = new WebDriverWait(driver,TestUtil.EXPLICIT_WAIT);
        driver.get(prop.getProperty("url"));

    }
}
