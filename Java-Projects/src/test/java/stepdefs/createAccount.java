package stepdefs;

import cucumber.api.java.en.*;
import models.BrowserFactory;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import pages.HomePage;
import pages.Registration;

public class createAccount extends BrowserFactory
{

    WebDriver driver;

    @Given("^I want to create a new account with automationpractice$")
    public void iWantToCreateANewAccountWithAutomationpractice() throws Throwable {
        driver = BrowserFactory.startBrowser("chrome", "http://automationpractice.com/index.php");
    }

    @When("^I click on signin$")
    public void iClickOnSignin() throws Throwable {
        HomePage hmPage = PageFactory.initElements(driver, HomePage.class);

        //Asserting simple text which is sign-in exists or not by checking this we know that user successfully seeing home page
//        System.out.println("singInText-->"+singInText);
        Assert.assertEquals("Sign in", hmPage.getText(hmPage.SigninLink));
        hmPage.clickOnLink(hmPage.SigninLink);

        //Asserting Authentication page header
        System.out.println("header--->"+hmPage.getText(hmPage.authenticationHeader));
        Assert.assertEquals("AUTHENTICATION", hmPage.getText(hmPage.authenticationHeader));

    }

    @And("^I click on Create an account with '(.*)'$")
    public void iClickOnCreateAnAccountWithEmail(String email) throws Throwable {

        System.out.println(("tests ....."));
        Registration regPage = PageFactory.initElements(driver, Registration.class);

        regPage.createAccount(email);

    }
 //[a-zA-Z]+
    @And("^I fill the registration details '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)', '(.*)'$")
    public void iFillTheRegistrationDetailsTitleFNameLNamePasswordDayMonthYearAddressCityStateZipMobile(String fName, String lName, String password, String day, String month, String year, String address, String city, String state, String zip, String mobile) throws Throwable {
        Registration regPage = PageFactory.initElements(driver, Registration.class);
        regPage.Register(fName, lName, password, day, month, year, address, city, state, zip, mobile);
    }

    @Then("^I must register with automationpracticeSite$")
    public void iMustRegisterWithAutomationpracticeSite() throws Throwable {
        Registration regPage = PageFactory.initElements(driver, Registration.class);
        regPage.successRegistartion();
    }

    @Then("^I should be able to SignOut$")
    public void i_should_be_able_to_SignOut() throws Throwable {
        Registration regPage = PageFactory.initElements(driver, Registration.class);
        regPage.singOutLabel.click();
        driver.close();
    }


}
