import BasePage from "../login-page/base.page";

class profilePage extends BasePage{

 
  get EmailBox(){
    return $('//*[@name="emailField"]');
}

  get inputSubmitButton(){
    return $('//*[@type="submit"]');
}

  get buildProfile(){
    return $('//*[@type="button"]');
  }




async enterDetailsPage(){
  await this.fullName.setValue("Max Tester");
}


}
export default new profilePage();
