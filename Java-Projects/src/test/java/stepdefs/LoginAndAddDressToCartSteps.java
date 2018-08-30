package stepdefs;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import models.BrowserFactory;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import pages.HomePage;
import pages.LoginPage;
import pages.Registration;

public class LoginAndAddDressToCartSteps {

    WebDriver driver;

    @Given("^I login$")
    public void ilogin() throws Throwable {
        driver = BrowserFactory.startBrowser("chrome", "http://automationpractice.com/index.php");
        HomePage hmPage = PageFactory.initElements(driver, HomePage.class);
        hmPage.SigninLink.click();

        LoginPage lnPage = PageFactory.initElements(driver, LoginPage.class);
        lnPage.login("abc2908201828@test.com","Anusha21");
    }

    @When("^I Add expensive dress to cart$")
    public void iAddexpensivedresstocart() throws Throwable {

        HomePage hmPage = PageFactory.initElements(driver, HomePage.class);
        hmPage.addCartJourney();
    }

    @And("^LogOut and Login again$")
    public void iLogOutandLoginagain() throws Throwable {

        Registration regPage = PageFactory.initElements(driver, Registration.class);
        regPage.singOutLabel.click();

        HomePage hmPage = PageFactory.initElements(driver, HomePage.class);
        hmPage.SigninLink.click();

        LoginPage lnPage = PageFactory.initElements(driver, LoginPage.class);
        lnPage.login("abc2908201828@test.com","Anusha21");

    }

    @Then("^I should see previously added item in cart$")
    public void ishouldseepreviouslyaddeitemincart() throws Throwable {

        HomePage hmPage = PageFactory.initElements(driver, HomePage.class);
        Assert.assertEquals("1", hmPage.cartQty.getText());
        driver.close();
    }
}


