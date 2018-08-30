package pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ByIdOrName;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

import java.util.concurrent.TimeUnit;

public class Registration {

    WebDriver driver;

    public Registration(WebDriver driver)
    {
        this.driver = driver;
    }

    @FindBy(how= How.ID_OR_NAME, using ="email_create")
    WebElement emailAddress;

    @FindBy(how= How.ID_OR_NAME, using ="SubmitCreate")
    WebElement createAccountButton;


    @FindBy(how= How.ID_OR_NAME, using ="uniform-id_gender2")
    WebElement titleRadio;

    @FindBy(how= How.ID_OR_NAME, using ="customer_firstname")
    WebElement fNameInput;

    @FindBy(how= How.ID_OR_NAME, using ="customer_lastname")
    WebElement lNameInput;

    @FindBy(how= How.ID_OR_NAME, using ="passwd")
    WebElement paaInput;

    @FindBy(how= How.ID_OR_NAME, using ="days")
    WebElement daySelect;

    @FindBy(how= How.ID_OR_NAME, using ="months")
    WebElement monthsSelect;

    @FindBy(how= How.ID_OR_NAME, using ="years")
    WebElement yearsSelect;

    @FindBy(how= How.ID_OR_NAME, using ="address1")
    WebElement add1Input;

    @FindBy(how= How.ID_OR_NAME, using ="city")
    WebElement cityInput;

    @FindBy(how= How.ID_OR_NAME, using ="id_state")
    WebElement stateSelect;

    @FindBy(how= How.ID_OR_NAME, using ="postcode")
    WebElement postcodeInput;

    @FindBy(how= How.ID_OR_NAME, using ="phone_mobile")
    WebElement phone_mobileInput;

    @FindBy(how= How.ID_OR_NAME, using ="submitAccount")
    WebElement regButton;

    @FindBy(how= How.CSS, using ="#header > div.nav > div > div > nav > div:nth-child(2) > a")
    public WebElement singOutLabel;


    public void createAccount(String email) throws InterruptedException {
        emailAddress.sendKeys(email);
        createAccountButton.click();

    }

    public void Register(String fName, String lName, String password, String day, String month, String year, String address, String city, String state, String zip, String mobile) throws InterruptedException {
        driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS) ;
        titleRadio.click();
        fNameInput.sendKeys(fName);
        lNameInput.sendKeys(lName);
        paaInput.sendKeys(password);

        Select dayDropdown=new Select(daySelect);
        dayDropdown.selectByValue(day);

        Select monthDropdown =new Select(monthsSelect);
        monthDropdown.selectByValue(month);

        Select yearDropdown=new Select(yearsSelect);
        yearDropdown.selectByValue(year);

        add1Input.sendKeys(address);
        cityInput.sendKeys(city);

        System.out.println("state--->"+state);
        Select stateDropdown=new Select(stateSelect);
        stateDropdown.selectByIndex(11);

        postcodeInput.sendKeys(zip);
        phone_mobileInput.sendKeys(mobile);

        regButton.click();
    }

    public void successRegistartion() throws InterruptedException {
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS) ;
        Assert.assertEquals("Sign out", singOutLabel.getText());

    }

}
