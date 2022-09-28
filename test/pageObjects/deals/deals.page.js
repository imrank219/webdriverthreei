import BasePage from "../login-page/base.page";

class dealsPage extends BasePage{

    get DealsLink(){
        return $('(//*[@href="/deals?only_opened=true&sort_by=createdAt"]) [2]');
        
      }

    get dealsPageTitle(){
        return $('//*[@class= "title" and contains(., "Deals")]');
    }

    get dealPageOpen(){
        return $('(//*[text()="Open"]) [1]');
    }

    get dealPageClosed(){
        return $('(//*[text()="Closed"]) [1]');
    }

    get dealCardOpen(){
        return $('(//*[@class="info-wrap" and .//span[contains(., "Open")]]) [1]');
    }

    get dealPageSector(){
        return $('//*[text()="Sector"]');
    }

    get dealPageStrategy(){
        return $('//*[text()="Strategy"]');
    }

    get dealPageOnlyShowDeals(){
        return $('//*[text()="Only show open deals"]');
    }

    get dealPageOnlySortBy(){
        return $('//*[text()="Sort by"]');
    }

    get dealPageDateAdded(){
        return $('//*[text()="Date Added"]');
    }

    get dealPageTimeToClose(){
        return $('//*[text()="Time to Close"]');
    }

    get dealPagePopularity(){
        return $('//*[text()="Popularity"]');
    }

    get dealCardClosed(){
        return $('(//*[@class="info-wrap" and .//span[contains(., "Closed")]]) [1]');
    }

    get dealOnlyShowCheck(){
        return $('//*[@type="checkbox"]');
    }

    get zeroClosed(){
        return $('//*[text()="0" and //text()="Closed"]');
    }




}
export default new dealsPage();