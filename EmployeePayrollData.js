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

    get id() {
        return this._id;
    }

    set id(id) {
        let idRegex = RegExp('^[1-9][0-9]*$');
        if (idRegex.test(id))
            this._id = id;
        else
            throw "ID input is Invalid!";
    }

    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))
            this.name = name;
        else throw 'Name input is Invalid!';
    }

    get salary() {
        return this._salary;
    }

    set salary(salary) {
        let salaryRegex = RegExp('^[1-9][0-9]*$');
        if (salaryRegex.test(salary))
            this._salary = salary;
        else
            throw "Salary input is Invalid!";
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        let genderRegex = RegExp('^[F|f|M|m]$');
        if (genderRegex.test(gender))
            this._gender = gender;
        else 
            throw "Gender input is Invalid!";
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