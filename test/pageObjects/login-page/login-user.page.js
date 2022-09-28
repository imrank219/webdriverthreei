//const { default: BasePage } = require("./base.page");
import BasePage from "../login-page/base.page";

class ContactUsPage extends BasePage{
////    open() {
//        return super.open("/Contact-Us/contactus.html");
//    }

get inputEmailAddress(){
    return $('//*[@name="email"]');
  }
  get inputPassword(){
        return $('//*[@name="password"]');
}

get inputSubmitButton(){
    return $('//*[@type="submit"]');
}

get successfulSubmissionHeader2(){
    return $('//*[@class="error" and text()="Invalid email"]');
}
get invalidPassword(){
    return $('//*[@class="error" and text()= "Invalid password"]');
}

async submitForm(emailAddress){
    
     await this.inputEmailAddress.setValue(emailAddress);
  //   await this.inputPassword.setValue(password);
     await this.inputSubmitButton.click();
    

}

async submitForm2( emailAddress , password){
    
    await this.inputEmailAddress.setValue(emailAddress);
    await this.inputPassword.setValue(password);
    await this.inputSubmitButton.click();



}
}
export default new ContactUsPage();