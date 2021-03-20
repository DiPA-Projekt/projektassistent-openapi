# OpenAPI des Projektassistenten

## Organisation

- `release/*` sind **Release-Branches**
- Code kann auf **Release-Branches** nur mittels PR gemerged werden.
- Jeder Merge auf `release/*` generiet automatisch einen neuen Release-Entwurf im GitHub.
- Sobald der Release-Entwurf veröffentlich wird, dann werden die Artefakte für Maven und NPM gebaut.
- Die Version wird manuell in der `src/openapi.yml` gepflegt.
- Die OpenAPI wird wie gewohnt im `src/`-Verzeichnis designed.
