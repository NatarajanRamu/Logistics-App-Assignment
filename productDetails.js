import { LightningElement ,api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import PRODUCT_OBJECT from '@salesforce/schema/Product2';
import NAME_FIELD from '@salesforce/schema/Product2.Name';
import PRODUCT_CODE_FIELD from '@salesforce/schema/Product2.ProductCode';
import ORDER_ID_FIELD from '@salesforce/schema/Product2.Order_ID__c';
import PRODUCT_DESCRIPTION_FIELD from '@salesforce/schema/Product2.Description';
import PRODUCT_PRICE_FIELD from '@salesforce/schema/Product2.Product_Price__c';
import DRIVER_NAME_FIELD from '@salesforce/schema/Product2.Driver_Name__c';
import DRIVER_CONTACT_NUMBER_FIELD from '@salesforce/schema/Product2.Driver_Contact_Number__c';
import DELIVERY_CHARGES_FIELD from '@salesforce/schema/Product2.Delivery_Charges__c';
export default class ProductDetails extends LightningElement {

    objectApiName = PRODUCT_OBJECT;
fields = [ORDER_ID_FIELD, NAME_FIELD, PRODUCT_CODE_FIELD, PRODUCT_DESCRIPTION_FIELD, PRODUCT_PRICE_FIELD, DRIVER_NAME_FIELD, DRIVER_CONTACT_NUMBER_FIELD, DELIVERY_CHARGES_FIELD];
handleSuccess(event) {
    const toastEvent = new ShowToastEvent({
        title: "Product has been Added Successfully",
        message: "Record ID: " + event.detail.id,
        variant: "success"
    });
    this.dispatchEvent(toastEvent);
}

get cardTitle() {
    return (this.name) ? `${this.name}'s Order Details` : 'Product and Driver Details';
  }
}