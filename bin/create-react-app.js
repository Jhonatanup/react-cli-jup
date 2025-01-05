#!/usr/bin/env node

const { parseArgs } = require("../src/utils/execCommand");
const { createApp } = require("../src/commands/createApp");

const args = parseArgs(process.argv.slice(2));
createApp(args);
