#!/usr/bin/env bash
set -euo pipefail

PRODUCT="${1:-}"
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd -- "$SCRIPT_DIR/../../../../" && pwd)"

case "$PRODUCT" in
  neuron-mesh) PRODUCT_DIR="websites/neuron-mesh" ;;
  agent) PRODUCT_DIR="websites/agent" ;;
  *)
    echo "Usage: $0 neuron-mesh|agent" >&2
    exit 2
    ;;
esac

if [[ ! -d "$REPO_ROOT/$PRODUCT_DIR" ]]; then
  echo "Product directory does not exist: $PRODUCT_DIR" >&2
  exit 1
fi

PLANNING="$REPO_ROOT/$PRODUCT_DIR/planning"
mkdir -p "$PLANNING/sprints"

create_if_absent() {
  local path="$1"
  local contents="$2"
  if [[ -e "$PLANNING/$path" ]]; then
    echo "kept existing $PRODUCT_DIR/planning/$path"
  else
    printf '%s\n' "$contents" > "$PLANNING/$path"
    echo "created $PRODUCT_DIR/planning/$path"
  fi
}

create_if_absent README.md "# $PRODUCT planning

This directory is the Scrum source of truth for $PRODUCT only. Keep its backlog, sprint, and release history here. Do not create a shared workspace at the repository root."
create_if_absent BACKLOG.md "# Backlog — $PRODUCT

| ID | Outcome | Priority | State | Acceptance / dependency |
|---|---|---|---|---|"
create_if_absent SPRINT_ACTUAL.md "# Current sprint — $PRODUCT

No active sprint has been selected."
create_if_absent VERSIONES.md "# Versions — $PRODUCT

Record delivered increments and their actual verification here."
