package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {

    WebDriver driver;

    public LoginPage(WebDriver driver)
    {
        this.driver = driver;
    }

    @FindBy(how= How.ID, using ="email")
    WebElement emailInput;

    @FindBy(how= How.ID, using ="passwd")
    WebElement pssWordInput;

    @FindBy(how= How.ID, using ="SubmitLogin")
    WebElement SubmitLoginButton;

    public void login(String email, String pass)
    {
        emailInput.sendKeys(email);
        pssWordInput.sendKeys(pass);
        SubmitLoginButton.click();
    }
}
