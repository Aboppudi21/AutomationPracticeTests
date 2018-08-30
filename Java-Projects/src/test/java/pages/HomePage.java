package pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

import java.util.concurrent.TimeUnit;


public class HomePage {

    WebDriver driver;

    public HomePage(WebDriver driver)
    {
        this.driver = driver;
    }

    @FindBy(how= How.CSS, using ="#header > div.nav > div > div > nav > div.header_user_info > a")
    public WebElement SigninLink;

    @FindBy(how= How.CSS, using="#center_column > h1")
    public WebElement authenticationHeader;

    @FindBy(how= How.CSS, using="#block_top_menu > ul > li:nth-child(2)")
    public WebElement dressesLink;

    @FindBy(how= How.CSS, using="#center_column > h1 > span.cat-name")
    WebElement dressesHeader;

    @FindBy(how= How.ID, using="selectProductSort")
    WebElement sortByDropDown;

    @FindBy(how= How.CSS, using="#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.last-line.first-item-of-tablet-line.last-mobile-line > div > div.left-block > div > a.product_img_link > img")
    WebElement expDessImg;

    @FindBy(how= How.CSS, using="#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.last-line.first-item-of-tablet-line.last-mobile-line.hovered > div > div.right-block > div.button-container > a.button.ajax_add_to_cart_button.btn.btn-default")
    WebElement addTOCartFromMainWindow;

    @FindBy(how= How.CSS, using="#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > span")
    WebElement closeWindow;

    @FindBy(how= How.ID, using="Submit")
    WebElement addtocartButton;

    @FindBy(how= How.CSS, using="#layer_cart > div.clearfix")
    WebElement successPopUp;

    @FindBy(how= How.CSS, using="#layer_cart > div.clearfix > div.layer_cart_product.col-xs-12.col-md-6 > h2")
    WebElement successMessage;

    @FindBy(how= How.CSS, using="#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a")
    WebElement proceedtoCheckOutButton;

    @FindBy(how= How.CSS, using="#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a")
    WebElement CartClick;

    @FindBy(how= How.CSS, using="#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a > span.ajax_cart_quantity")
    public WebElement cartQty;

    public String getText(WebElement ele) {
        return ele.getText();
    }
    public void clickOnLink(WebElement ele) {
        ele.click();
    }

    public void addCartJourney() throws InterruptedException {

        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS) ;
        dressesLink.click();
        System.out.println("Dressessss header-->"+dressesHeader.getText());

        Select sortDropDwn = new Select(sortByDropDown);
        sortDropDwn.selectByIndex(1);

        driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS) ;
//        String MainWindow = driver.getWindowHandle();
//        System.out.println("main window-->"+MainWindow);
//        for (String activeHandle : driver.getWindowHandles()) {
//            System.out.println("window size-->"+driver.getWindowHandles().size());
//            if (!activeHandle.equals(MainWindow)) {
//                driver.switchTo().window(activeHandle);
//            }
//        }

        Actions builder = new Actions(driver);
        builder.moveToElement( expDessImg ).click( addTOCartFromMainWindow );
        builder.perform();

//        System.out.println("window size-->"+driver.getWindowHandles().size());
        builder.moveToElement( successPopUp ).click( proceedtoCheckOutButton );

        CartClick.click();
        System.out.println("cartQty header-->"+cartQty.getText());
        Assert.assertEquals("1", cartQty.getText());
    }




}
