
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

    it('invalid email address ', async() => {
        
        
        ContactUsPage.submitForm( "max_blogs12");

     //   const successfulSubmissionHeader2 = $('//*[@class="error" and text()="Invalid email"]');
        await expect(ContactUsPage.successfulSubmissionHeader2).toBeDisplayed();

        
    

    });

    it('valid email but invalid password', async() => {

 

    ContactUsPage.submitForm2( "john12@msn.com","test");

  //  const invalidpassword = $('//*[@class="error" and text()= "Invalid password"]');
    await expect(ContactUsPage.inputPassword).toBeDisplayed();
    
    await browser.pause (2000);

    
        
    });


    it('valid email and password and user is on dashboard page -  submit all information', async() => {

 

      ContactUsPage.submitForm2( "genfield12@mailinator.com","Test1234!");
      await browser.pause (6000);
  
     // const dashboard = $('//*[@class="dashboard-item-titles" and text()="3i Spotlight Deals (3)"]');
      await expect(DashBoardPage.inputDashboard).toBeDisplayed();

      await browser.closeWindow();
      
  
          
      });
});