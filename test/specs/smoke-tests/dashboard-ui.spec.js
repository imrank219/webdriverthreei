
import ContactUsPage from "F:/3iAutoFrame/test/pageObjects/smoke-tests/login-user.page";
import DashBoardPage from "F:/3iAutoFrame/test/pageObjects/smoke-tests/dashboard.page";
//import ContactUsPage from "../pageObjects/automation-test-store/contact-us2.page";

describe('3i login page', () => {
    beforeEach(async() => {
         await browser.maximizeWindow();
      //   await DashBoardPage.open();
         await ContactUsPage.open();
      // 
        console.log(`>>Browser Object: + ${JSON.stringify(browser)}`);
    });

  

    it('Validate dashboard page UI', async() => {

 

      ContactUsPage.submitForm2( "genfield12@mailinator.com","Test1234!");
     

      //const clickM_button = await $('(//*[@class="navbar-item-heading /events"]) [2]')

      //await clickM_button.waitForClickable();
      
  
     // const dashboard = $('//*[@class="dashboard-item-titles" and text()="3i Spotlight Deals (3)"]');
      await expect(DashBoardPage.inputDashboard).toBeDisplayed();
      await browser.pause (1000);
      await expect(DashBoardPage.inputWelcomeTitle).toBeDisplayed();
      await expect(DashBoardPage.eventsAndmeetings).toBeDisplayed();
      await expect(DashBoardPage.loginMessage).toBeDisplayed();
      await expect(DashBoardPage.spotLightDeals).toBeDisplayed();
    //  await expect(DashBoardPage.threeiteamAccountManager).toBeDisplayed();
    //  await expect(DashBoardPage.threeiteamAccountName).toBeDisplayed();
    //  await expect(DashBoardPage.askthreeihelp).toBeDisplayed();
      await expect(DashBoardPage.askthreeshareadeal).toBeDisplayed();
      await expect(DashBoardPage.seealldeals).toBeDisplayed();
      await expect(DashBoardPage.opendeals).toBeDisplayed();
      await expect(DashBoardPage.closeddeals).toBeDisplayed();

      //await clickM_button.click();
      //await browser.pause (3000);
       
      
  
          
      });
});