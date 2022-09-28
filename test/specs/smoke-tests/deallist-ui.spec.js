
import ContactUsPage from "F:/webdriverio-framework/test/pageObjects/smoke-tests/login-user.page";
import DashBoardPage from "F:/webdriverio-framework/test/pageObjects/smoke-tests/dashboard.page";
import eventsPage from "F:/webdriverio-framework/test/pageObjects/smoke-tests/events.page";
import dealsPage from "F:/webdriverio-framework/test/pageObjects/smoke-tests/deals.page";

//import ContactUsPage from "../pageObjects/automation-test-store/contact-us2.page";

describe('3i login page', () => {
    beforeEach(async() => {
         await browser.maximizeWindow();
       //  await DashBoardPage.open();
           await ContactUsPage.open();
       //    await dealsPage.open();
       //    await eventsPage.open();
      // 
        console.log(`>>Browser Object: + ${JSON.stringify(browser)}`);
    });

  

    it('Validate deal list page UI', async() => {

 

     ContactUsPage.submitForm2( "genfield12@mailinator.com","Test1234!");
     
     await eventsPage.EventsLink.waitForClickable();
          
     await (await dealsPage.DealsLink).click();

     await browser.pause (3000);

     await dealsPage.dealsPageTitle.isDisplayed();

     if ((await dealsPage.dealsPageTitle).isDisplayed) {
           dealsPage.dealPageOpen.isDisplayed();
           dealsPage.dealPageClosed.isDisplayed();
           dealsPage.dealCardOpen.isDisplayed();
           dealsPage.dealPageSector.isDisplayed();
           dealsPage.dealPageStrategy.isDisplayed();
           dealsPage.dealPageOnlyShowDeals.isDisplayed();
           dealsPage.dealPageOnlySortBy.isDisplayed();
           dealsPage.dealPageDateAdded.isDisplayed();
           dealsPage.dealPageTimeToClose.isDisplayed();
           dealsPage.dealPagePopularity.isDisplayed();
           dealsPage.dealCardClosed.isDisplayed();
           
          //*[text()='Host:']
          console.debug("Event Present");
      
     } else {
          console.debug("No Event");
     }

    // await dealsPage.dealOnlyShowCheck.click();
     await browser.pause (2000);
     await (await dealsPage.zeroClosed).isDisplayed();

     await browser.closeWindow();
       
      
  
          
      });
});