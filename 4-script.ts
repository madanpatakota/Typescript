//interface --> contract

/* Interface
  intrface is nothing but a  contract .. where we are going to provide the methods into it.
*/

//Bad Archti  contract or service


interface IAgriService extends IAgriFormerRelatedFundsSerivce{
       getCropsList() : number;   //
       PrintCropsList() : void;
}

interface IAgriGovermentRelatedFundsSerivce{
        getFundsListOfSeptember() : number[]  //
}

interface IAgriFormerRelatedFundsSerivce{
     getAgriIncome() : string;
}

interface ICscService{
    getJavascriptStudents() : string[];   //
}

class AgricultureClass implements IAgriService , IAgriGovermentRelatedFundsSerivce{
        getCropsList() : number{
            return 1;
        }
        PrintCropsList() : void{
           console.log("Print Crop");
        }
        getFundsListOfSeptember() : number[] {
             return [1,2,3,4];
        }
        getAgriIncome(){
            return "10000rupees";
        }
}

class CSSImplementaiton implements ICscService{
    getJavascriptStudents() : string[]{
         return ["______" , "_______"];
    }
}


// class AgricultureClass{
//     getCropListOfSeptember(){
//         return ["______", "________"];
//     }
//     getTypescriptClassStudents(){
//         //
//     }
// }


// class TypescriptClass{
//      getCropsListofSeptember(){
//         return [""];
//      }
//      getTypescriptClassStudents(){
        
//      }
// }




// interface IcustomerInfo{


// }



