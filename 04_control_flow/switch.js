//one value multiple checks or checkpoints, it would be hectic withif and else so  we use switch.... ex:In Redux
//General Syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

//USE CASE STUDY
const month = 2;
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("february");
        break;
    case "march":
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
        default:
        console.log("default case");
        break;
        }

        //if break is not mentioned everything would executed until break is applied except default
        //if anycase doesnt matches means true then default(false) gets executed.
//************************************** */
