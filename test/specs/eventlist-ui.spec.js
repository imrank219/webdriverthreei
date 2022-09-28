
import ContactUsPage from "../pageObjects/login-page/login-user.page";
import DashBoardPage from "../pageObjects/dashboard/dashboard.page";
import eventsPage from "../pageObjects/events/events.page";

//import ContactUsPage from "../pageObjects/automation-test-store/contact-us2.page";

describe('3i login page', () => {
    beforeEach(async() => {
         await browser.maximizeWindow();
     //    await DashBoardPage.open();
         await ContactUsPage.open();
      // 
        console.log(`>>Browser Object: + ${JSON.stringify(browser)}`);
    });

  

    it('Validate event list page UI', async() => {

 

      ContactUsPage.submitForm2( "genfield12@mailinator.com","Test1234!");
     
     await eventsPage.EventsLink.waitForClickable();
          
     await eventsPage.EventsLink.click();
     await browser.pause (3000);

     await eventsPage.calendar.isDisplayed();

     if ((await eventsPage.eventName).isDisplayed) {
          await eventsPage.rsvpButton.isDisplayed();
          await eventsPage.calendar.isDisplayed();
          await eventsPage.eventLocation.isDisplayed();
          await eventsPage.eventTime.isDisplayed();
          await eventsPage.attendeesDisplayed.isDisplayed();
          await eventsPage.hostDisplayed.isDisplayed();
          //*[text()='Host:']
          console.debug("Event Present");
      
     } else {
          console.debug("No Event");
     }
       
     await browser.closeWindow();
  
          
      });
});