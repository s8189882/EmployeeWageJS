console.log("Welcome To Employee Wage Computation Application!");

const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_ABSENT) {
        console.log("\nEmployee is Absent.");
    } else {
        console.log("\nEmployee is Present.");
    }