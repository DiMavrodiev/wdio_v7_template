const { config } = require('../wdio.conf');
const device = require('./mobile-devices');

exports.config = {
    ...config,
    ...{
        services: ['chromedriver'],
        screenshotPath: `./errorShots/chrome/`,
        capabilities: [
            {
                maxInstances: 5,
                browserName: 'chrome',
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
