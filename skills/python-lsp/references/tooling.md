# Python LSP Tooling

## Intent

This plugin gives Codex Python LSP capabilities for semantic navigation and diagnostics during Python work.

## Tool surface

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

## Current implementation

- The plugin package exposes `codex-python-lsp` as its npm `bin` entrypoint.
- That entrypoint launches the package-local `@mizchi/lsmcp` install.
- `lsmcp` starts with the built-in `pyright` preset.
- Codex talks to that MCP server through `.mcp.json`.

## Constraints

- Tool output quality depends on the workspace root and Python import configuration.
- If semantic results look incomplete, inspect the source file directly and mention the limitation.
