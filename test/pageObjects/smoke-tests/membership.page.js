import BasePage from "../smoke-tests/base.page";

class memberPage extends BasePage{

 
  get EmailBox(){
    return $('//*[@name="emailField"]');
}

  get inputSubmitButton(){
    return $('//*[@type="submit"]');
}

  get buildProfile(){
    return $('//*[@type="button"]');
  }

  get fullName(){
    return $('//*[@id="fullName"]');
}
  get telephone(){
    return $('//*[@type="tel"]');
  }

  get streetAddress(){
     return $('//*[@id="streetAddress"]');
  }

  get zipcode(){
     return $('//*[@id="zipCode"]');
  }

  get city(){
     return $('//*[@id="city"]');
  }

  get state(){
     return $('(//*[@value="Texas"]) [1]');
  }

  get password(){
     return $('//*[@id="password"]');
  }

  get confirmPassword(){
     return $('//*[@id="confirmPassword"]');
  }

  get submit(){
      return $('//*[@type="submit"]');
  }

  get bio(){
      return $('//*[@id="bio"]');
  }

  get excited(){
      return $('//*[@id="excitedAbout"]');
  }
  
  get area1(){
      return $('//*[@id="area1"]');
  }

  get invoicecheckbox(){
      return $('//*[@name="sendInvoice"]');
  }

  get dashboardbutton(){
      return $('//*[@class="white-button centered"]');
  }

  get rsvpbutton(){
      return $('(//*[@type="button"]//*[text()="RSVP"]) [3]');
  }

  get goingdisplayed(){
      return $('//*[text()="Going"]');
  }




async submitEmail(name,emailaddress){
    let value1 = Math.floor(Math.random() * 1000) + 1;
    await browser.pause(2000);
    await (await this.EmailBox).click();
    await browser.pause(2000);
    const namenew = (name + value1 + emailaddress )
    await (await this.EmailBox).setValue(namenew)
    await (await this.inputSubmitButton).click();
    console.log(namenew);
  
 }

 async enterDetailsPage(){
  await this.fullName.setValue("Max Tester");
  await this.telephone.setValue("2222222222");
  await this.streetAddress.setValue("5454 Newcastle St");
  await this.zipcode.setValue("75093");
  await this.city.setValue("Plano");
  await this.state.click();
  await this.password.setValue("Test1234!");
  await this.confirmPassword.setValue("Test1234!");
  await this.submit.click();
  await browser.pause(2000);
  await this.bio.setValue("Test");
  await this.excited.setValue("Test");
  await this.submit.click();
  await browser.pause(2000);
  await this.area1.setValue("Test");
  await this.submit.click();
  await browser.pause(2000);
  await this.invoicecheckbox.click();
  await this.submit.click();
  await browser.pause(1000);
  await (await this.dashboardbutton).click();
  await browser.pause(4000);
  await this.rsvpbutton.click();
  await browser.pause(4000);
  await this.goingdisplayed.isDisplayed();
 // await browser.pause(10000);
}



}
export default new memberPage();
