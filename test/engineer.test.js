const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("Initializatiom", () => {
    it("should create an object with 'name' string, 'id' string 'email' string, and 'github' string", () => {
      const engineer = new Engineer();

      expect(typeof engineer).toBe("object");
    });
  });

  describe("getGithub", () => {
    it("should return a 'github' string", () => {
      const github = "GitHub";
      const engineer = new Engineer("Foo", 1, "foo@bar.com", github);

      expect(engineer.getGithub()).toEqual(github);
    });
  });
});
