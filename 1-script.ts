// Ts <---- Js  + features

var customer_IDone  :number  = 1;
customer_IDone  = 1234;

var customer_one    :string  = "1233";
customer_one = "adfasda";

var isStatus        :boolean  = true;
isStatus = false;

console.log(customer_one);

//any

let anyValue : any = "London";
anyValue = 1234;
anyValue = true;

let unknownValue: unknown = "ABCD";
    unknownValue = 1;
    unknownValue = true;


//let checking_one: string = anyValue;
//let checking_one: string = unknownValue;


//Arrays


var customerIDs   : number[] = [1, 2, 3, 4, 5];
customerIDs.push(100);

var customerNames : string[] = [ "john" , "Robert"];
customerNames.push("heel");


var companyList :readonly string[]  = ["TCS"];
//companyList.push("Wipro"); // Error: Property 'push' does not exist on type 'readonly string[]'.




console.log(customerNames);

console.log("Hey.....!!!");


//ctrl+f5  build

// debug (watch)  - f5
