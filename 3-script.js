/*********************Enums
 *
 * Enum is a kind of special class which represents the group of the constant value.
 *
 * By default enum start to initilize the variable with the 0 and then it will increase the count.
 *
 *
 *  ***************/
var Customers_Group_1;
(function (Customers_Group_1) {
    Customers_Group_1[Customers_Group_1["Willimam"] = 0] = "Willimam";
    Customers_Group_1[Customers_Group_1["Clerk"] = 1] = "Clerk";
    Customers_Group_1[Customers_Group_1["John"] = 2] = "John";
    Customers_Group_1[Customers_Group_1["Andy"] = 3] = "Andy";
    Customers_Group_1[Customers_Group_1["Mery"] = 4] = "Mery";
})(Customers_Group_1 || (Customers_Group_1 = {}));
console.log("William number is : " + Customers_Group_1.Willimam); //0
console.log("Clerk number is : " + Customers_Group_1.Clerk);
console.log("John number is : " + Customers_Group_1.John);
console.log("Andy number is : " + Customers_Group_1.Andy);
console.log("Mery number is : " + Customers_Group_1.Mery);
var Customers_Group_2;
(function (Customers_Group_2) {
    Customers_Group_2[Customers_Group_2["Willimam"] = 101] = "Willimam";
    Customers_Group_2[Customers_Group_2["Clerk"] = 201] = "Clerk";
    Customers_Group_2[Customers_Group_2["John"] = 301] = "John";
    Customers_Group_2[Customers_Group_2["Andy"] = 401] = "Andy";
    Customers_Group_2[Customers_Group_2["Mery"] = 501] = "Mery";
})(Customers_Group_2 || (Customers_Group_2 = {}));
console.log("William number is : " + Customers_Group_2.Willimam); //0
console.log("Clerk number is : " + Customers_Group_2.Clerk);
console.log("John number is : " + Customers_Group_2.John);
console.log("Andy number is : " + Customers_Group_2.Andy);
console.log("Mery number is : " + Customers_Group_2.Mery);
var Customers_Group_3;
(function (Customers_Group_3) {
    Customers_Group_3["Willimam"] = "IND";
    Customers_Group_3["Clerk"] = "US";
    Customers_Group_3["John"] = "Aus";
    Customers_Group_3["Andy"] = "UK";
    Customers_Group_3["Mery"] = "SA";
})(Customers_Group_3 || (Customers_Group_3 = {}));
console.log("William Location is : " + Customers_Group_3.Willimam); //0
console.log("Clerk Location is : " + Customers_Group_3.Clerk);
console.log("John Location is : " + Customers_Group_3.John);
console.log("Andy Location is : " + Customers_Group_3.Andy);
console.log("Mery Location is : " + Customers_Group_3.Mery);
var data = "IND"; //Understand that iam getting record from database or any other source
if (data == "IND") {
}
if (data == Customers_Group_3.Willimam) {
}
var Roles;
(function (Roles) {
    Roles[Roles["Admin"] = 1] = "Admin";
    Roles[Roles["User"] = 2] = "User";
    Roles[Roles["Viewer"] = 3] = "Viewer";
})(Roles || (Roles = {}));
var myRoleID = 1;
//Hey!!!! if the role is Admin then access  then access the page
if (myRoleID == 1) {
    //
}
if (myRoleID == Roles.User) {
    //
}
var alertMessages;
(function (alertMessages) {
    alertMessages["Success"] = "Operation completed successfully.";
    alertMessages["Error"] = "An error occurred during the operation.";
    alertMessages["Warning"] = "Please check your input.";
    alertMessages["Info"] = "This is an informational message.";
})(alertMessages || (alertMessages = {}));
var apiMessage = "Operation completed successfully"; // api
if (apiMessage == alertMessages.Success) {
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
var customername = "John";
var customername2 = "Madan";
var JohnAge1 = 20;
var JohnAge = 20;
var employee_one_age = 20;
var employee_one_salary = 12;
var employee_one_status = true;
var employee_two_name = "Kavya";
var personalInformation1 = {
    "pname": "John",
    page: 30,
    psalary: 100.09,
    pstatus: true
};
console.log(personalInformation1.pname); //JOhn
var personalInformation2 = {
    "pname": "John",
    page: 30,
    psalary: 100.09,
    pstatus: true
};
console.log(personalInformation2.pname); //John
