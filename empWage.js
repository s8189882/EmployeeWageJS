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

function totalWageUsingReduce(totalWage, dailyWage){
    return totalWage + dailyWage;
}


function mapDayWithWages (empWage) {
    dailyCounter++;
    return dailyCounter + " = " + empWage;
}

function fulltimeWage (empWage) {
    return empWage.includes("160");
}

function parttimeWage (empWage) {
    return empWage.includes("80");
}

function totalDaysWorked (numOfDays, empWage) {
    if (empWage > 0)
        return numOfDays+1;
    return numOfDays;
}

let dailyCounter = 0;
let totalEmpHours = 0;
let totalEmpWage = 0;
let totalWorkingDays = 0;
let empDailyHoursWageArr = new Array();
let employeeDailyWageMap = new Map();
let empDailyHrsMap = new Map(); 

while (totalEmpHours <= MAX_HRS_IN_A_MONTH && totalWorkingDays < MAX_DAYS_IN_A_MONTH) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHours = getWorkingHours(empCheck);
    totalEmpHours += empHours;
    empDailyHoursWageArr.push(
    {
        dayNumber: totalWorkingDays,
        dayHours: empHours,
        dayWage: calcDailyWage(empHours),
        toString() {
            return '\nDay : ' + this.dayNumber + '\tWorking Hours : ' + this.dayHours + '\tWage : ' + this.dayWage
        },
    });
}

console.log("Employee Wage day wise : ");
console.log(empDailyHoursWageArr);