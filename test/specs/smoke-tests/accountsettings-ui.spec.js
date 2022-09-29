
import ContactUsPage from "F:/3iAutoFrame/test/pageObjects/smoke-tests/login-user.page";
import DashBoardPage from "F:/3iAutoFrame/test/pageObjects/smoke-tests/dashboard.page";
import eventsPage from "F:/3iAutoFrame/test/pageObjects/smoke-tests/events.page";
//import accountSettingsPage from "../pageObjects/smoke-tests/profile.page";
import accountSettingsPage from "F:/3iAutoFrame/test/pageObjects/smoke-tests/profile.page";

//import ContactUsPage from "../pageObjects/automation-test-store/contact-us2.page";

describe('3i login page', () => {
    beforeEach(async() => {
         await browser.maximizeWindow();
      //   await DashBoardPage.open();
         await ContactUsPage.open();
      ///   await accountSettingsPage.open();
      // 
        console.log(`>>Browser Object: + ${JSON.stringify(browser)}`);
    });

  

    it('Validate account settings UI', async() => {


     ContactUsPage.submitForm2( "genfield12@mailinator.com","Test1234!");
     
     await eventsPage.EventsLink.waitForClickable();

     await accountSettingsPage.profileLink.click();
          
     await (await accountSettingsPage.settingsLink).click();
     await browser.pause (3000);
     
     accountSettingsPage.submitOldPassword("Test1234!");
     await browser.pause(3000);

   //  accountSettingsPage.submitNewPassword("Test1234!");
   //  accountSettingsPage.submitConfirmPassword("Test1234!");
     
   //  await accountSettingsPage.saveChangesbutton.click();

     await accountSettingsPage.enternewpassword.click();
     await browser.pause(3000);
     
     await accountSettingsPage.enternewpassword.setValue("Test12345!");
     await browser.pause(3000);
     await  accountSettingsPage.confirmpassword.setValue("Test12345!");
     await browser.pause(3000);
     await accountSettingsPage.saveChangesbutton.click();
     await browser.pause(3000);

     await accountSettingsPage.profileLink.click();

    await  accountSettingsPage.logOut.click();

    await browser.pause(5000);

    await ContactUsPage.open();

    ContactUsPage.submitForm2( "genfield12@mailinator.com","Test12345!");

    await eventsPage.EventsLink.waitForClickable();

    await accountSettingsPage.profileLink.click();

    await (await accountSettingsPage.settingsLink).click();
     await browser.pause (3000);
     
     accountSettingsPage.submitOldPassword("Test12345!");
     await browser.pause(3000);

     await accountSettingsPage.enternewpassword.click();
     await browser.pause(3000);
     
     await accountSettingsPage.enternewpassword.setValue("Test1234!");
     await browser.pause(3000);
     await  accountSettingsPage.confirmpassword.setValue("Test1234!");
     await browser.pause(3000);
     await accountSettingsPage.saveChangesbutton.click();
     await browser.pause(3000);

     await browser.closeWindow();


     

     
     
       
      
  
          
      });
});