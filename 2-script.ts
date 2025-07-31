//tuple  :  A tuple is noting but a named array

var customerDetails_1 : [number , string , boolean] = [ 1, "John", false] ;

console.log(customerDetails_1[0]);  //1
console.log(customerDetails_1[1]);  //John      
console.log(customerDetails_1[2]);  //false

var customerDetails_2 : [any , any , boolean] = [  "jafasdsa" , 3 , true ] ;

var customerDetails_3 : [string , string , boolean] = [  "helo" , "world" , true ] ;

// Extract the values from array or object to the variable(s)  // Destructuring

//array destructuring
 var [cusotmerID , custoemrName , isStatus ]  =  [ 1, "John", false] ;
 console.log( "cusotmerid " + cusotmerID);    //1
 console.log("cusomtername " + custoemrName);  //John
console.log("isstauts " + isStatus);   //false


//object destructuring
var person = { cusname: 'John', age: 30 };
console.log(person.cusname); // John
console.log(person.age);    // 30


var { cusname , age}   = person;
console.log("cusname " + cusname); // John
console.log("age " + age);         // 30



var person1 = { cusname: 'John', age: 30 , loc:"bengolore" };
var { cusname , age , loc}   = person1;

console.log("cusname " + cusname); // John
console.log("age " + age);         // 30
console.log("loc " + loc);         // bengolore



// object

var cusotmerdeails_6 : {name : string , price:number , loc: string , isAdmin : boolean} = 
{
  "name"            : "John",
  "price"           :  100.09,
  "loc"        : "London",
  "isAdmin"         :  true
}

console.log(cusotmerdeails_6.name);  // John
console.log(cusotmerdeails_6.price); // 100.09  
console.log(cusotmerdeails_6.loc);   // London
console.log(cusotmerdeails_6.isAdmin); // true

var cusotmerdeails_7 : {studetid : number , studentname:string} ={
    "studetid"      : 1,
    "studentname"   : "John"
}

//optional properties (?)
var cusotmerdeails_8 : {studetid : number , studentname?:string} ={
    "studetid"      : 1,
}