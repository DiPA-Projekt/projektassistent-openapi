> 🏗 Das Repository befindet sich noch im Aufbau.

# OpenAPI des Projektassistenten

## Organisation

- `release/*` sind **Release-Branches**
- Code kann auf **Release-Branches** nur mittels PR gemerged werden.
- Jeder Merge auf `release/*` generiet automatisch einen neuen Release-Entwurf im GitHub.
- Sobald der Release-Entwurf veröffentlich wird, dann werden die Artefakte für Maven und NPM gebaut.
- Die Version wird manuell in der `src/openapi.yml` gepflegt.
- Die OpenAPI wird wie gewohnt im `src/`-Verzeichnis designed.

## Verwendung

### Scopes einstellen

- Maven: https://docs.github.com/en/packages/guides/configuring-apache-maven-for-use-with-github-packages
- NPM: https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages

### GitHub Personal Access Tokens

> ✋ **GitHub Personal Access Tokens** ist glaube bei öffentlichen Repositories garnicht notwendig.<br>
> 💡 -> https://github.community/t/how-to-allow-unauthorised-read-access-to-github-packages-maven-repository/115517

Projekte die die versionierten Artefakt der Projektassistent-OpenAPI wiederverwenden möchten, müssen das mittels eines **GitHub Personal Access Tokens** (https://github.com/settings/tokens) tun.

Beim Anlegen benötigen wir lediglich das Recht Pakete lesen zu können.
![image](https://user-images.githubusercontent.com/6279703/111860266-c3c33b80-8946-11eb-835b-22850f8e144c.png)

Jede Entwicklerin und Entwickler muss sich einen eigenen **GitHub Personal Access Tokens** anlegen und diesen sowohl in seinen lokalen Maven- als auch NPM-Settings hinterlegen.

Für die **GitHub-Workflows** wurde eine allgemeiner **GitHub Personal Access Tokens** (bleibt geheim) in den **Organisationseinstellungen** (https://github.com/organizations/DiPA-Projekt/settings/secrets/actions) hinterlegt. Die **GitHub-Workflows** können diesen über den Secret-Namen `GIT_HUB_PACKAGES_ACCESS_TOKEN` zum Installieren von Abhängigkeiten aus unseren Organisationsrepository verwenden.
