const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("Initializatiom", () => {
    it("should create an object with 'name' string, 'id' string, 'email' string, 'role' string, and 'github' string ", () => {
      const engineer = new Engineer();

      expect(typeof engineer).toBe("object");
    });
  });

  describe("getRole", () => {
    it("should return a 'role' string", () => {
      const role = "Engineer";
      const engineer = new Engineer("Foo", 1, "foo@bar.com", role, "GitHub");

      expect(engineer.getRole()).toEqual(role);
    });
  });

  describe("getGithub", () => {
    it("should return a 'github' string", () => {
      const github = "GitHub";
      const engineer = new Engineer("Foo", 1, "foo@bar.com", "Engineer", github);

      expect(engineer.getGithub()).toEqual(github);
    });
  });
})
