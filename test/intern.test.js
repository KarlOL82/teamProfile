const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("Initializatiom", () => {
    it("should create an object with 'name' string, 'id' string 'email' string, and 'school' string", () => {
      const intern = new Intern();

      expect(typeof intern).toBe("object");
    });
  });

  describe("getSchool", () => {
    it("should return a 'school' string", () => {
      const school = "school";
      const intern = new Intern("Foo", 1, "foo@bar.com", school);

      expect(intern.getSchool()).toEqual(school);
    });
  });
});
