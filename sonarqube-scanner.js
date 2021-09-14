const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://localhost:9000",
        token: "62fb0bff30d690e4a4422b6acf07151d7d288b39",
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
)
