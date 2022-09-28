
import ContactUsPage from "../pageObjects/login-page/login-user.page";
import DashBoardPage from "../pageObjects/dashboard/dashboard.page";
import eventsPage from "../pageObjects/events/events.page";
import dealsPage from "../pageObjects/deals/deals.page";
import onboardingPage from "../pageObjects/onboarding/onboarding.page";
import membershipPage from "../pageObjects/onboarding/membership.page"
//import profilePage from "../pageObjects/onboarding/profile.page"

//import ContactUsPage from "../pageObjects/automation-test-store/contact-us2.page";

describe('3i login page', () => {
    beforeEach(async() => {
         await browser.maximizeWindow();
         
      //   await DashBoardPage.open();
         await ContactUsPage.open();
      //   await onboardingPage.open();
      //   await membershipPage.open();
       //  await profilePage.open();
         await browser.url('/signup/membership-agreement-secondary');
      // 
        console.log(`>>Browser Object: + ${JSON.stringify(browser)}`);
    });

  

    it('Advance onboarding page', async() => {

     // await onboardingPage.getEmailBox.isDisplayed();

      await browser.pause(3000);
  
      
     await membershipPage.submitEmail("mark", "@mailinator.com");

 
     await browser.pause(3000);

     const iframe = await $('//iframe[@data-qa="ClickwrapIframeApp"]');

     await browser.switchToFrame(iframe);

 
     const elem = await $('//*[text()="Responsiveness:"]');

     await elem.scrollIntoView();

     await browser.pause(3000);

     //click agree
     const agreebutton = await $('//*[@data-qa="Click-Agree"]');

     await agreebutton.click();

     await browser.pause(8000);

     await browser.switchToParentFrame();

    await membershipPage.buildProfile.click();

    await browser.pause(7000);

 //   profilePage.enterDetailsPage();

    await membershipPage.enterDetailsPage();

    await browser.pause(10000);

    
       
     await browser.closeWindow();
  
          
      });
});