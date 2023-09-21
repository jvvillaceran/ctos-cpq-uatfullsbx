import { LightningElement, wire, api} from 'lwc';
import getRBOInProcessQuoteLines from '@salesforce/apex/RBOInProcessQLController.getRBOInProcessQuoteLines';

export default class RboInProcessQL extends LightningElement {
    @api recordId;  
    // run the query and return the data
    @wire (getRBOInProcessQuoteLines, { quoteId: '$recordId' })
    rboInProcessQuoteLines;

    // get the data from the query
    get rboInProcessQuoteLinesData() {
        if (this.rboInProcessQuoteLines.data) {
            console.log('Hello, everyone. I have data! ' + JSON.stringify(this.rboInProcessQuoteLines.data))
            return this.rboInProcessQuoteLines.data;
        } else{
        console.log("I don't have data yet. :(")
        return null;
    }
    
    }

    navigateToRecord(event) {
        // using wire service to get the record id
        const recordId = event.target.dataset.recordid;
        console.log('recordId: ' + recordId);
        
    }
}