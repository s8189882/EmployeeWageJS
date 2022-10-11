console.log("Welcome To Employee Wage Computation Application!");

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours (empCheck) {
    switch (empCheck) {
        case IS_PART_TIME :
            console.log("\nEmployee is Present part-time.")
            return PART_TIME_HOURS;

        case IS_FULL_TIME :
            console.log("\nEmployee is Present full-time.")
            return FULL_TIME_HOURS;
            
        default :
            console.log("\nEmployee is Absent.\nExiting the program!");
            return 0;
    }
}

let empCheck = Math.floor(Math.random() * 10) % 3;
empHours = getWorkingHours(empCheck);
let empWage = empHours * WAGE_PER_HOUR;
console.log("Employee Wage : " + empWage);
