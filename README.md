# codex-python-lsp

`codex-python-lsp` is a Codex plugin package that provides Python LSP tools for semantic navigation and diagnostics.

The package installs a local CLI entrypoint, exposes an MCP server through `.mcp.json`, and gives Codex a bundled `python-lsp` skill so Python work can trigger semantic navigation and diagnostics instead of relying on plain text search alone.

## What it includes

- `.codex-plugin/plugin.json`: Codex plugin manifest
- `.mcp.json`: MCP server registration
- `package.json`: npm package metadata, dependencies, and CLI bin entry
- `bin/codex-python-lsp.mjs`: package CLI entrypoint
- `skills/python-lsp/`: bundled skill that teaches Codex when to use Python LSP tools

## Default behavior

- The MCP server runs `./bin/codex-python-lsp.mjs`.
- That bin launches the package-local `@mizchi/lsmcp` install with the built-in `pyright` preset.
- Codex receives Python LSP and symbol-navigation tools through MCP.
- The `python-lsp` skill tells Codex to use those tools before non-trivial Python edits.

## Install the runtime

```bash
cd plugins/codex-python-lsp
npm install
```

This installs both `@mizchi/lsmcp` and `pyright`. Node `22+` is required.

The plugin intentionally does not support runtime backend switching. If you want a different engine, create a separate plugin so the installed behavior stays explicit.

## npm packaging

This package exposes the `codex-python-lsp` executable through the `bin` field in `package.json`.

## How Codex Uses It

1. The plugin registers an MCP server through `.mcp.json`.
2. Codex can call the Python LSP tools exposed by that server.
3. The bundled `python-lsp` skill helps Codex decide when Python work should use those tools.

## Repository

GitHub repository: `https://github.com/harryplusplus/codex-python-lsp`

## Remaining TODOs

1. Replace author and repository URLs in `.codex-plugin/plugin.json`.
2. Add actual images under `assets/`, or remove the icon and screenshot paths from the manifest.
