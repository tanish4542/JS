    // switch (key) {
    //     case value:
            
    //         break;

    //     default:
    //         break;
    // }
// SWITCH statement
// The switch statement evaluates an expression and executes code based on matching case values.
// Syntax:
// switch (expression) {
//     case value1:
//         // code to be executed if expression matches value1
//         break;
//     case value2:
//         // code to be executed if expression matches value2
//         break;
//     // more cases...
//     default:
//         // code to be executed if no case matches
//         break;
// }

let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
// The above code will output "Wednesday" because day is 3.