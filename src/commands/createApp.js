const { execSync } = require("child_process");

function createApp({ name, typescript }) {
  const template = typescript ? "react-ts" : "react";
  try {
    console.log(`Creating a new React app: ${name} with template ${template}...`);
    execSync(`npm create vite@latest ${name} -- --template ${template}`, { stdio: "inherit" });
    console.log("React app created successfully!");
  } catch (error) {
    console.error("Error creating React app:", error.message);
    process.exit(1);
  }
}

module.exports = { createApp };
