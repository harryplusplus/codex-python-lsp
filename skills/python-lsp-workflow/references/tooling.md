# Python LSP Tooling

## Intent

This plugin gives Codex a Python-aware semantic layer through `lsmcp` running with the `pyright` preset.

## Architecture

- The package exposes `codex-python-lsp` as its npm `bin` entrypoint.
- The bin entrypoint launches the package-local `@mizchi/lsmcp` install.
- `lsmcp` starts its built-in `pyright` preset.
- Codex talks to that MCP server through `.mcp.json`.

## Main tools

Prefer these tools during Python analysis:

- `get_project_overview`
- `search_symbols`
- `get_symbol_details`
- `lsp_get_definitions`
- `lsp_find_references`
- `lsp_get_hover`
- `lsp_get_document_symbols`
- `lsp_get_workspace_symbols`
- `lsp_get_diagnostics`

## Constraints

- The plugin is intentionally fixed to Pyright. Backend switching belongs in a separate plugin.
- Tool output quality depends on the workspace root and Python import configuration.
- If semantic results look incomplete, inspect the source file directly and mention the limitation.
