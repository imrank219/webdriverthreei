
import ContactUsPage from "../pageObjects/login-page/login-user.page";

describe('webdriveruniversity - contact us page', () => {
    beforeEach(async() => {
        await browser.maximizeWindow();
       // await browser.url('/Contact-Us/contactus.html');
       await ContactUsPage.open();
        console.log(`>>Browser Object: + ${JSON.stringify(browser)}`);
    });

    it.skip('valid submission - submit all information', async() => {
        
       
        //first name
     //   const firstName = await $('//*[@name="first_name"]');   
        //last name
    //    const lastName = await $('//*[@name="last_name"]');
        //email address
     //   const emailAddress = await $('//*[@name="email"]');
        //message
     //   const messageBox = await $('//form[@id="contact_form"]/textarea[@name="message"]');
        //submit button
     //   const submitButton = await $('//input[@value="SUBMIT"]');

     
     //   await lastName.setValue("Stark");
    //    await emailAddress.setValue("Tony12@mailinator.com");
     //   await messageBox.setValue("Hello how are you");
        ContactUsPage.submitForm("Max2", "Blogs", "max_blogs12@hotmail.com", "How are you");
     //   await submitButton.click();

        const successfulSubmissionHeader = $('div#contact_reply > h1');
        await expect(successfulSubmissionHeader).toHaveText('Thank You for your Message!');

       // await browser.pause (5000);
    });

    it.skip('invalid submission - dont submit all information', async() => {

              
        //first name
   //     const firstName = await $('//*[@name="first_name"]');   
        //last name
   //     const lastName = await $('//*[@name="last_name"]');
        //email address
   //     const emailAddress = await $('//*[@name="email"]');
        //message
    //    const messageBox = await $('//form[@id="contact_form"]/textarea[@name="message"]');
    //    //submit button
    //    const submitButton = await $('//input[@value="SUBMIT"]');



   //     await firstName.setValue("Max");
   //     await lastName.setValue("Stark");
     //   await emailAddress.setValue("Tony12@mailinator.com");
    //    await messageBox.setValue("Hello how are you");

        ContactUsPage.submitForm("John", "Blogs", "", "How are you");
     //   await submitButton.click();

        const unsuccessfulSubmissionHeader = $('/html/body');
        await expect(unsuccessfulSubmissionHeader).toHaveTextContaining('Error: all fields are required');
        
    });
});