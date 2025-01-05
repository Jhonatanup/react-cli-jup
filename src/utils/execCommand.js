function parseArgs(args) {
  const nameIndex = args.indexOf("--name");
  const name = nameIndex !== -1 ? args[nameIndex + 1] : "my-app";

  const typescript = args.includes("--typescript");

  return { name, typescript };
}

module.exports = { parseArgs };
