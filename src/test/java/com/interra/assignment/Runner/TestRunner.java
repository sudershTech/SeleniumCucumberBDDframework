package com.interra.assignment.Runner;

import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;
import cucumber.api.testng.TestNGCucumberRunner;


@RunWith(Cucumber.class)
@CucumberOptions(features="./features", // Path of features file
        glue="", //Path of step definition files
        tags="@web, @Login", // Tags are used to execute some specific scenarios, we used in feature files
        format = {"pretty"},
        plugin={"html:target/cucumber-html-report","com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},
        dryRun = false,  // if dryRun true means it will check all steps are there according to feature file, nothing missed.
        monochrome = true // display the console output in a proper readable format
)

public class TestRunner {
    private TestNGCucumberRunner testNGCucumberRunner;
    @AfterClass(alwaysRun = true)
    public void tearDown() {
        testNGCucumberRunner.finish();
    }

    // Method for extent report
    public static void writeExtentReport() {
        Reporter.loadXMLConfig("src/extent-config.xml");
    }
}
