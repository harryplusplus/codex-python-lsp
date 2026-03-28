#!/usr/bin/env node

import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const lsmcpEntry = path.resolve(scriptDir, "../node_modules/@mizchi/lsmcp/dist/lsmcp.js");

const child = spawn(process.execPath, [lsmcpEntry, "-p", "pyright", ...process.argv.slice(2)], {
  stdio: "inherit",
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 1);
});

child.on("error", (error) => {
  console.error("Failed to start codex-python-lsp.");
  console.error(error.message);
  process.exit(1);
});
