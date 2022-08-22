const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initializatiom", () => {
        it("should create an object with 'name' string, 'id' string, 'email' string, and 'role' string ", () => {
          const employee =  new Employee();

          expect(typeof(employee)).toBe("object");
        });
    });
    describe("getName", () => {
        it("should return a 'name' string", () => {
            const name = "Foo";
            const employee = new Employee(name, 1, "foo@bar.com", "Employee")

            expect(employee.getName()).toEqual(name);

        });
    });
    describe("getId", () => {
        it("should return a 'id' string", () => {
            const id = "1";
            const employee = new Employee("Foo", id, "foo@bar.com", "Employee")

            expect(employee.getId()).toEqual(id);

        });
    });
    describe("getEmail", () => {
        it("should return a 'email' string", () => {
            const email = "foo@bar.com";
            const employee = new Employee("Foo", 1, email, "Employee")

            expect(employee.getEmail()).toEqual(email);

        });
    });
    describe("getRole", () => {
        it("should return a 'role' string", () => {
            const role = "Employee";
            const employee = new Employee("Foo", 1, "foo@bar.com", role)

            expect(employee.getRole()).toEqual(role);
    });            
});

})