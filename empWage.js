console.log("Welcome To Employee Wage Computation Application!");

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;


let empHours = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
    case IS_PART_TIME :
        empHours = PART_TIME_HOURS;
        console.log("\nEmployee is Present part-time.")
        break;

    case IS_FULL_TIME :
        empHours = FULL_TIME_HOURS;
        console.log("\nEmployee is Present full-time.")
        break;
        
    default :
        empHours = 0;
        console.log("\nEmployee is Absent.\nExiting the program!");
}

let empWage = empHours * WAGE_PER_HOUR;
console.log("Employee Wage : " + empWage);
