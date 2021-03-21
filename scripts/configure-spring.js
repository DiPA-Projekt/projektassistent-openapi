const fs = require("fs");
fs.writeFileSync(
  "config/spring.json",
  `{
  "groupId": "online.dipa",
  "artifactDescription": "DiPA - ${process.argv[2]}",
  "scmUrl": "https://github.com/DiPA-Projekt/projectassistent-openapi",
  "hideGenerationTimestamp": true,
  "artifactId": "${process.argv[2]}",
  "artifactVersion": "${process.argv[3]}",
  "apiPackage": "online.dipa.projektassistent.openapi.api",
  "modelPackage": "online.dipa.projektassistent.openapi.model",
  "interfaceOnly": true,
  "generateSupportingFiles": false,
  "generateModelTests": false,
  "generateModelDocumentation": false,
  "generateApiDocumentation": false,
  "generateApiTests": false,
  "serializableModel": true,
  "snapshotVersion": true,
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