const { config } = require('../wdio.conf');
const device = require('./mobile-devices');

exports.config = {
    ...config,
    ...{
        services: ['docker','selenium-standalone'],
        screenshotPath: `./errorShots/edge/`,
        dockerOptions: {
            image: 'selenium/standalone-edge:90.0.818.6',
            healthCheck: {
                url: 'http://localhost:5000',
                maxRetries: 2,
                inspectInterval: 1000,
                startDelay: 5000
            },
            options: {
                p: ['5000:4444'],
                shmSize: '2g'
            }
        },
        capabilities: [
            {
                maxInstances: 5,
                browserName: 'MicrosoftEdge',
                'ms:edgeOptions': {
                    mobileEmulation: {
                        deviceName: device[process.env.DEVICE]
                    },
                    args: [
                        //'--headless',
                        '--window-size=1200,700'
                    ]
                },
                port:5000
            }
        ]
    }
}
