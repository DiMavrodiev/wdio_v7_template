const { config } = require('../wdio.conf');
const device = require('./mobile-devices');

exports.config = {
    ...config,
    ...{
        services: ['docker', 'selenium-standalone'],
        screenshotPath: `./errorShots/chrome/`,
        dockerOptions: {
            image: 'selenium/standalone-chrome',
            healthCheck: {
                url: 'http://localhost:5555',
                maxRetries: 2,
                inspectInterval: 1000,
                startDelay: 5000
            },
            options: {
                p: ['5555:4444'],
                shmSize: '2g'
            }
        },
        capabilities: [
            {
                maxInstances: 5,
                browserName: 'chrome',
                port: 5555,
                'goog:chromeOptions': {
                    mobileEmulation: {
                        deviceName: device[process.env.DEVICE]
                    },
                    args: [
                        //'--headless',
                        '--window-size=1200,700'
                    ]
                }
            }
        ]
    }
}