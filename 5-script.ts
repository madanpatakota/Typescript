
/* single datype tpe*/
let cusomerPrice1 : number ;
cusomerPrice1 = 123;


/* multidaatype*/
let cusomerPrice2 : number | string;
cusomerPrice2  = 1000;
cusomerPrice2  = "1000";   //Tech guy


/* function */

function getCustomerName() : string{
    return "______________";
}
getCustomerName();


function PrintMessage() : void{
    console.log("Message print");
    // return "______________";
}


//name should be string           //done
//cusLocation should be string    //done
// return type should be void     //done;

function customerDetails(name:string , cusLocation:string)  : void {
    // i am not prining any thing
}

customerDetails("John" , "UK");


//id should be number           //done
//cusLocation should be string    //done
//status should be boolean     //done

// return type should be non-void  better take string   //done;
function CustomerDetails_10(id:number , cusLocation:string , status : boolean)  : string {
    // i am not prining any thing
    return "Hey!!! i am from UK";
}
CustomerDetails_10(1, "UK" , true);



//typecasting one type to another type...
//as keyword to convert one type to aonther type

var productName : unknown = 1;
var sProductName = productName as string;  // string
sProductName = "Samsung";


var productName : unknown = 100000;
var nProductName = productName as number;  // string
nProductName = 2000;