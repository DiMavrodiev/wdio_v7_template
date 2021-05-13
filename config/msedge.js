const { config } = require('../wdio.conf');
const device = require('./mobile-devices');

exports.config = {
    ...config,
    ...{
        services: ['edgedriver'],
        screenshotPath: `./errorShots/edge/`,
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
                }
            }

        ]
    }
}
