const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("Initializatiom", () => {
    it("should create an object with 'name' string, 'id' string 'email' string, and 'office' string ", () => {
      const manager = new Manager();

      expect(typeof manager).toBe("object");
    });
  });

  describe("getOffice", () => {
    it("should return a 'office' string", () => {
      const office = "101";
      const manager = new Manager("Foo", 1, "foo@bar.com", office);

      expect(manager.getOffice()).toEqual(office);
    });
  });
});
