import BasePage from "../login-page/base.page";

class DashBoardPage extends BasePage{


    get inputDashboard(){
        return $('//*[@class="dashboard-item-titles" and text()="3i Spotlight Deals (4)"]');
        
      }

    get inputWelcomeTitle(){
       return $('//*[text()="Welcome, Graham Enfield"]');
    }

    get eventsAndmeetings(){
      return $('(//*[@class="dashboard-item-titles" and text()="Events & Meetings"]) [2]');
    }
    
    get loginMessage(){
      return $('//*[contains(text(),"Last Login")]');
    }
    
    get spotLightDeals() {
      return $('//*[contains(text(),"3i Spotlight Deals")]');
    }

    get threeiteamAccountName(){
      return $('(//*[@class="account-name" and text()="3i team"]) [1]');
    }

    get threeiteamAccountManager(){
      return $('(//*[@class="account-role" and text()="Your Account Manager"]) [1]');
    }

    get askthreeihelp(){
       return $('(//*[text()="Ask 3i for help"]) [1]');
    }

    get askthreeshareadeal(){
      return $('(//*[text()="Share a deal"]) [1]');
   }

   get seealldeals(){
    return $('(//*[text()="See all Deals..."]) [2]');
 }

 

get opendeals(){
   return $('(//*[text()="4 Open"]) [1]');
}

get closeddeals(){
  return $('(//*[text()="0 Closed"]) [1]');
}








}
export default new DashBoardPage();