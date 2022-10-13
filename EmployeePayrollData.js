class EmployeePayrollData {
    id;
    salary;
    gender;
    startDate;

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name() {
        return this.name;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))
            this.name = name;
        else throw 'Name is Invalid!';
    }

    toString() {
        const options = { year : 'numeric', month : 'long', day : 'numeric'};
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "ID : " + this.id + " Name : " + this.name + " Salary : " + this.salary + " Gender : " + this.gender + "Start Date : " + empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(111, "Mark", 50000000);
console.log(employeePayrollData.toString());
try {
    employeePayrollData.name = "john";
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}

let newEmployeePayrollData = new EmployeePayrollData(222, "Teresa", 30000000, 'F', new Date());
console.log(newEmployeePayrollData.toString());