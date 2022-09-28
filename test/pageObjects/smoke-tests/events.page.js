import BasePage from "../smoke-tests/base.page";

class eventsPage extends BasePage{

    get EventsLink(){
        return $('(//*[@class="navbar-item-heading /events"]) [2]');
        
      }

  //  get eventName(){
  //      return $('//*[@class="event-name" and contains(text(),"Morgan")]');
  //  }

    get eventName(){
        return $('(//*[@class="event-name"]) [1]');
    }

    get rsvpButton(){
        return $('(//*[@class="ant-btn ant-btn-default rsvp-button"]) [1]');
    }

    get calendar(){
        return $('//*[@class="calendar"]');
    }

    get eventTime(){
        return $('(//*[@class="event-time"]) [1]');
    }

    get eventLocation(){
        return $('(//*[@class="event-location"]) [1]');
    }

    get attendeesDisplayed(){
        return $('(//*[text()=" Attendees:"]) [1]');
    }

    get hostDisplayed(){
        return $('(//*[text()="Host:"]) [1]');
    }



}
export default new eventsPage();
