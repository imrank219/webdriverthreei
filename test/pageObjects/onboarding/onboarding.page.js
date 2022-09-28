
import BasePage from "../login-page/base.page";

class OnboardingPage extends BasePage{
////    open() {
//        return super.open("/Contact-Us/contactus.html");
//    }


get EmailBox(){
    return $('//*[@name="emailField"]');
}

get inputSubmitButton(){
    return $('//*[@type="submit"]');
}

get fullName(){
    return $('//*[@id="fullName"]');
}

async emailTextBox(emailAddress){
    
     await this.getEmailBox.setValue(emailAddress);
  //   await this.inputPassword.setValue(password);
     await this.inputSubmitButton.click();
    

}

async enterDetailsPage(){
    await this.fullName.setValue("Max Tester");
}

}
export default new OnboardingPage ();