class EmployeePayrollData {
    id;
    salary;

    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get name() {
        return this.name;
    }

    set name (name) {
        this.name = name;
    }

    toString() {
        return "ID : " + this.id + " Name : " + this.name + " Salary : " + this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(111, "Mark", 50000000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "John";
console.log(employeePayrollData.toString());