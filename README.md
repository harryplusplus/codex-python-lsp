# codex-python-lsp

`codex-python-lsp` is a Codex plugin package that gives Codex Python language intelligence through `lsmcp` backed by `pyright-langserver`.

The design follows the same goal as Claude's Python LSP plugins: make symbol navigation and semantic inspection available to the agent. The difference is the transport. Instead of relying on a Claude-specific `lspServers` manifest field, this plugin runs a general-purpose Node MCP server (`lsmcp`) and points it at `pyright-langserver`.

## What it includes

- `.codex-plugin/plugin.json`: Codex plugin manifest
- `.mcp.json`: MCP server registration
- `package.json`: npm package metadata, dependencies, and CLI bin entry
- `bin/codex-python-lsp.mjs`: package CLI entrypoint
- `skills/python-lsp-workflow/`: bundled skill that teaches Codex when and how to use the tools

## Default behavior

- The plugin executes its own package bin, which starts `lsmcp` with the built-in `pyright` preset.
- Codex gets `lsmcp`'s LSP and high-level symbol tools instead of custom ad hoc bridge tools.
- The skill tells Codex to use those tools before making Python edits when symbol-level understanding matters.

## Install the runtime

```bash
cd plugins/codex-python-lsp
npm install
```

This installs both `@mizchi/lsmcp` and `pyright`. Node `22+` is required.

The plugin intentionally does not support runtime backend switching. If you want a different engine, create a separate plugin so the installed behavior stays explicit.

## npm packaging

This package exposes the `codex-python-lsp` executable through the `bin` field in `package.json`.

## Publish to GitHub

1. Commit this repository with `plugins/codex-python-lsp` and `.agents/plugins/marketplace.json`.
2. Push it to GitHub.
3. Pull or clone the repository wherever you want to use it.
4. Point Codex at the repo-local marketplace entry if your setup expects marketplace discovery.

## Remaining TODOs

1. Replace author and repository URLs in `.codex-plugin/plugin.json`.
2. Add actual images under `assets/`, or remove the icon and screenshot paths from the manifest.
3. Adjust the marketplace display name if you want a different catalog title.
