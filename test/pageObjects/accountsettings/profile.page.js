import BasePage from "../login-page/base.page";

class accountSettingsPage extends BasePage{

    get profileLink(){
        return $('//*[@class="navbar-profile-picture"]');
    }

    get settingsLink(){
        return $('//*[text()="Your Settings"]');
    }
    get passwordLink(){
        return $('/html//input[@id="oldpassword"]');
            }
    get enternewpassword(){
         return $('/html//div[@id="password"]//input[@id="password"]');
           }
    get confirmpassword(){
        return $('/html//input[@id="confirmPassword"]');
    }

    get saveChangesbutton(){
         return $('(//*[text()="Save Changes"]) [1]');
    }

    get logOut(){
        return $('//*[text()="Logout"]');
    }

    async submitOldPassword(oldpassword){
    
        await this.passwordLink.setValue(oldpassword)
     //   await browser.pause(3000);
  
   
   }

   async submitNewPassword(validpwd){
    await browser.pause(3000);
    await this.enternewpassword.click();
    await browser.pause(3000);
    await this.enternewpassword.setValue(validpwd);


}
 async submitConfirmPassword(validpwd2){
//    await browser.debug();
    await browser.pause(3000);
    await this.confirmpassword.click();
    await browser.pause(3000);
    await this.confirmpassword.setValue(validpwd2);
    await this.saveChangesbutton.click();
    await browser.pause(5000);
 }
    


}
export default new accountSettingsPage();