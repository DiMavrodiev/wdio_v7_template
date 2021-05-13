const { config } = require('../wdio.conf');

exports.config = {
    ...config,
    ...{
        services: ['docker', 'selenium-standalone'],
        screenshotPath: `./errorShots/firefox/`,
        dockerOptions: {
            image: 'selenium/standalone-firefox',
            healthCheck: {
                url: 'http://localhost:5959',
                maxRetries: 2,
                inspectInterval: 1000,
                startDelay: 5000
            },
            options: {
                p: ['5959:4444'],
                shmSize: '2g'
            }
        },
        capabilities: [
            {
                maxInstances: 5,
                browserName: 'firefox',
                port: 5959,
                'moz:firefoxOptions': {
                    //args:['-headless']
                }
            }
        ]
    }
}