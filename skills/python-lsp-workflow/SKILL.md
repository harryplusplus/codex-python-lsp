---
name: python-lsp-workflow
description: Use this skill when Codex needs Python symbol-aware navigation or diagnostics through the bundled Pyright-backed lsmcp tools, especially for `.py`, `.pyi`, and `.pyw` files, before editing unfamiliar code, tracing definitions or references, or checking semantic errors.
---

# Python Lsp Workflow

## Overview

Use the plugin's lsmcp tools before making non-trivial Python edits. Prefer these tools when plain text search is too weak to answer symbol-level questions safely.

## Quick Start

1. Resolve the repository root that should be treated as the workspace.
2. Use `get_project_overview` or `search_symbols` first when the repository is unfamiliar.
3. Use `lsp_get_diagnostics` on the target file if the user mentions errors, typing issues, or failing analysis.
4. Use `lsp_get_definitions` and `lsp_find_references` before refactoring or editing a symbol used across files.
5. Use `lsp_get_hover` when you need signatures, inferred types, or quick documentation.
6. Use `lsp_get_document_symbols`, `lsp_get_workspace_symbols`, or `get_symbol_details` to map an unfamiliar module or locate a symbol by name.

## Use the Right Tool

- Use `get_project_overview` for the first semantic pass over an unfamiliar repository.
- Use `search_symbols` or `get_symbol_details` as the fastest symbol-centric entry point.
- Use `lsp_get_definitions` to jump from a usage site to the defining symbol.
- Use `lsp_find_references` to estimate blast radius before renaming or changing behavior.
- Use `lsp_get_hover` to inspect signatures, type information, and inline documentation.
- Use `lsp_get_document_symbols` to get a structured outline of a Python file.
- Use `lsp_get_workspace_symbols` to find classes, functions, and variables across the workspace by name.
- Use `lsp_get_diagnostics` to read the current file's LSP-reported issues.

## Workflow

1. Start from the user-visible file and symbol.
2. Gather semantic context with definition, hover, and references.
3. Read the relevant code only after the LSP output tells you where to look.
4. Make the edit.
5. Re-run diagnostics on touched Python files if the change could affect types or imports.

## Constraints

- Treat LSP output as guidance, not proof. If the output looks incomplete, inspect the source file directly.
- This plugin is fixed to lsmcp with the `pyright` preset. Treat its output as Pyright-backed semantic guidance.
- Use repository-relative paths and a stable workspace root whenever possible so the language server can resolve imports correctly.
- If diagnostics are empty but the user reports issues, mention that Pyright may need project configuration or import roots to reflect the real environment.

## References

- See `references/tooling.md` for the plugin architecture and the main lsmcp tool names to prefer.
