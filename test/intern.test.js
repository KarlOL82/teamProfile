const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("Initializatiom", () => {
    it("should create an object with 'name' string, 'id' string, 'email' string, 'role' string, and 'school' string ", () => {
      const intern = new Intern();

      expect(typeof intern).toBe("object");
    });
  });

  describe("getRole", () => {
    it("should return a 'role' string", () => {
      const role = "Intern";
      const intern = new Intern("Foo", 1, "foo@bar.com", role, "School");

      expect(intern.getRole()).toEqual(role);
    });
  });

  describe("getGithub", () => {
    it("should return a 'school' string", () => {
      const school = "school";
      const intern = new Intern("Foo", 1, "foo@bar.com", "Intern", school);

      expect(intern.getSchool()).toEqual(school);
    });
  });
})
