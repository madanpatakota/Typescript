/*********************Enums
 * 
 * Enum is a kind of special class which represents the group of the constant value.
 * 
 * By default enum start to initilize the variable with the 0 and then it will increase the count.
 * 
 * 
 *  ***************/

enum  Customers_Group_1{ 
     Willimam ,     //0
     Clerk,         //1
     John,          //2
     Andy,
     Mery
}

console.log("William number is : " + Customers_Group_1.Willimam);    //0
console.log("Clerk number is : " + Customers_Group_1.Clerk);
console.log("John number is : " + Customers_Group_1.John);
console.log("Andy number is : " + Customers_Group_1.Andy);
console.log("Mery number is : " + Customers_Group_1.Mery);



enum  Customers_Group_2{ 
     Willimam = 101 ,     //0
     Clerk = 201  ,      //1
     John = 301 ,   //2
     Andy = 401,
     Mery = 501,
}



console.log("William number is : " + Customers_Group_2.Willimam);    //0
console.log("Clerk number is : " + Customers_Group_2.Clerk);
console.log("John number is : " + Customers_Group_2.John);
console.log("Andy number is : " + Customers_Group_2.Andy);
console.log("Mery number is : " + Customers_Group_2.Mery);


enum  Customers_Group_3{ 
     Willimam = "IND" ,     //0
     Clerk = "US"  ,      //1
     John ="Aus" ,   //2
     Andy = "UK",
     Mery = "SA",
}

console.log("William Location is : " + Customers_Group_3.Willimam);    //0
console.log("Clerk Location is : " + Customers_Group_3.Clerk);
console.log("John Location is : " + Customers_Group_3.John);
console.log("Andy Location is : " + Customers_Group_3.Andy);
console.log("Mery Location is : " + Customers_Group_3.Mery);


var data = "IND"; //Understand that iam getting record from database or any other source

if(data == "IND"){

}

if(data == Customers_Group_3.Willimam){

}


enum Roles {
        Admin = 1,
        User = 2,
        Viewer = 3,
}


var myRoleID = 1;


//Hey!!!! if the role is Admin then access  then access the page

if(myRoleID == 1){
    //
}


if(myRoleID == Roles.User){
    //
}


enum alertMessages{
    Success = "Operation completed successfully.",
    Error = "An error occurred during the operation.",
    Warning = "Please check your input.",
    Info = "This is an informational message."
}



var apiMessage = "Operation completed successfully";    // api


if(apiMessage == alertMessages.Success){
    console.log("Operation completed successfully.");
}



// type



/***********How to use the 'type' Keyword in Typescript
 * 
 * type is the  keyword in Typescript useful for creates the custom name.
 * 
 * type can used in any data type like string , number , boolean , undefined , null ( these 3 are primitives means once you declared you cannot change)
 * and also used in complex data types like array, objects also
 * 
 * 
 */


var customername : string = "John";
type name = string;
var customername2 : name  = "Madan";


type age = number;
var JohnAge1 : number = 20;
var JohnAge : age = 20;

type salary = number;
type status = boolean;


var employee_one_age    : age = 20;
var employee_one_salary : salary = 12;
var employee_one_status : status = true;


type kavya =  string;
var employee_two_name : kavya = "Kavya";


// var cusotmerdeails_6 : {name : string , price:number , loc: string , isAdmin : boolean} = 
// {
//   "name"            : "John",
//   "price"           :  100.09,
//   "loc"        : "London",
//   "isAdmin"         :  true
// }


//we cannot use type into the inheritance concept you cannot give ref to the class

//YOu cannot give the PersonInfo ref to the class
type PersonINfo = {
    pname : string,
    page : number,
    psalary : number,
    pstatus : boolean
}

interface IPersonINformation{
    pname : string,
    page : number,
    psalary : number,
    pstatus : boolean
}

var personalInformation1 : PersonINfo = {
    "pname" : "John",
    page : 30,
    psalary : 100.09,
    pstatus : true
}
console.log(personalInformation1.pname);  //JOhn

var personalInformation2 : IPersonINformation = {
    "pname" : "John",
    page : 30,
    psalary : 100.09,
    pstatus : true
}
console.log(personalInformation2.pname); //John