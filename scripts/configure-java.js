const fs = require("fs");
fs.writeFileSync(
  "config/java.json",
  `{
  "groupId": "online.dipa",
  "artifactDescription": "DiPA - ${process.argv[2]}",
  "scmUrl": "https://github.com/DiPA-Projekt/projectassistent-openapi",
  "hideGenerationTimestamp": true,
  "artifactId": "${process.argv[2]}-java",
  "artifactVersion": "${process.argv[3]}",
  "apiPackage": "online.dipa.projektassistent.openapi.java.api",
  "modelPackage": "online.dipa.projektassistent.openapi.java.model",
  "interfaceOnly": true,
  "generateSupportingFiles": false,
  "generateModelTests": false,
  "generateModelDocumentation": false,
  "generateApiDocumentation": false,
  "generateApiTests": false,
  "serializableModel": true,
  "snapshotVersion": false,
  "useTags": true
}`,
  {
    encoding: "utf8",
  }
);

// {
//   "groupId": "online.dipa",
//   "artifactDescription": "DiPA - projektassistent-openapi",
//   "scmUrl": "https://github.com/DiPA-Projekt/projectassistent-openapi",
//   "hideGenerationTimestamp": true,
//   "artifactId": "projektassistent-openapi",
//   "artifactVersion": "0.0.1",
//   "apiPackage": "online.dipa.projektassistent.openapi.api",
//   "modelPackage": "online.dipa.projektassistent.openapi.model",
//   "interfaceOnly": true,
//   "generateSupportingFiles": false,
//   "generateModelTests": false,
//   "generateModelDocumentation": false,
//   "generateApiDocumentation": false,
//   "generateApiTests": false,
//   "serializableModel": true,
//   "snapshotVersion": true,
//   "useTags": true
// }