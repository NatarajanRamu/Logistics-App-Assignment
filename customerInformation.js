import { LightningElement ,api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CUSTOMER_OBJECT from '@salesforce/schema/Customer__c';
import NAME_FIELD from '@salesforce/schema/Customer__c.Name';
import PICKUP_ADDRESS_FIELD from '@salesforce/schema/Customer__c.Pickup_Address__c';
import EMAIL_FIELD from '@salesforce/schema/Customer__c.Email__c';
import DELIVERY_ADDRESS_FIELD from '@salesforce/schema/Customer__c.Delivery_Address__c';
import PHONE_FIELD from'@salesforce/schema/Customer__c.Phone__c';

import LOCATION_FIELD from'@salesforce/schema/Customer__c.Location__c';
export default class CustomerDetails extends LightningElement {

    objectApiName = CUSTOMER_OBJECT;
fields = [NAME_FIELD, PICKUP_ADDRESS_FIELD, EMAIL_FIELD,DELIVERY_ADDRESS_FIELD,PHONE_FIELD, LOCATION_FIELD];
handleSuccess(event) {
    const toastEvent = new ShowToastEvent({
        title: "Customer has been Added",
        message: "Record ID: " + event.detail.id,
        variant: "success"
    });
    this.dispatchEvent(toastEvent);
}
}