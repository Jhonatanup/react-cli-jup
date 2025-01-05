const fs = require("fs");
const { createApp } = require("../../src/commands/createApp");

test("should create a project directory with the given name", () => {
  const projectName = "test-app";
  createApp({ name: projectName, typescript: false });
  expect(fs.existsSync(projectName)).toBe(true);
  fs.rmSync(projectName, { recursive: true });
});
