const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("Initializatiom", () => {
    it("should create an object with 'name' string, 'id' string, 'email' string, 'role' string, and 'office' string ", () => {
      const manager = new Manager();

      expect(typeof manager).toBe("object");
    });
  });

  describe("getRole", () => {
    it("should return a 'role' string", () => {
      const role = "Manager";
      const manager = new Manager("Foo", 1, "foo@bar.com", role, "101");

      expect(manager.getRole()).toEqual(role);
    });
  });

  describe("getOffice", () => {
    it("should return a 'office' string", () => {
      const office = "101";
      const manager = new Manager("Foo", 1, "foo@bar.com", "Manager", office);

      expect(manager.getOffice()).toEqual(office);
    });
  });
})
