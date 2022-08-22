const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initializatiom", () => {
        it("should create an object with 'name' string, 'id' string, 'email' string, and 'role' string ", () => {
          const employee =  new Employee();

          expect(employee).toEqual({name: "", id: "", email: "", role: ""})
        });
    });
    describe("getName", () => {
        it("should return a 'name' string", () => {
            const name = Employee.name;

            expect(name).toEqual(getName(answers));

        });
    });
    describe("getId", () => {
        it("should return a 'id' string", () => {
            const id = Employee.id;

            expect(id).toEqual(getId(answers));

        });
    });
    describe("getEmail", () => {
        it("should return a 'id' string", () => {
            const id = Employee.id;

            expect(email).toEqual(getEmail(answers));

        });
    });
    describe("getRole", () => {
        it("should return a 'role' string", () => {
            const role = "Employee";

            expect(id).toEqual(getId(answers));

        });
    });            
});