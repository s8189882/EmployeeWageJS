console.log("Welcome To Employee Wage Computation Application!");

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_HRS_IN_A_MONTH = 160;
const MAX_DAYS_IN_A_MONTH = 20;

function getWorkingHours (empCheck) {
    switch (empCheck) {
        case IS_PART_TIME :
            console.log("\nEmployee is Present part-time.")
            return PART_TIME_HOURS;

        case IS_FULL_TIME :
            console.log("\nEmployee is Present full-time.")
            return FULL_TIME_HOURS;
            
        default :
            console.log("\nEmployee is Absent.");
            return 0;
    }
}

function calcDailyWage(empHours) {
    return empHours * WAGE_PER_HOUR;
}

function mapDayWithWages (empWage) {
    dailyCounter++;
    return dailyCounter + " = " + empWage;
}

function fulltimeWage (empWage) {
    return empWage.includes("160");
}

let dailyCounter = 0;
let totalEmpHours = 0;
let totalEmpWage = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHours <= MAX_HRS_IN_A_MONTH && totalWorkingDays < MAX_DAYS_IN_A_MONTH) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHours = getWorkingHours(empCheck);
    empDailyWageArr.push(calcDailyWage(empHours));
    totalEmpHours += empHours;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWages);
let fulltimeWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("Checking if all fulltime Daily Wage are accurate : " + fulltimeWageArr.every(fulltimeWage));
