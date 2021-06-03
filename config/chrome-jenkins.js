const { config } = require('../wdio.conf');
const device = require('./mobile-devices');
const hostname = process.env.HOST || 'localhost';
const port = process.env.PORT || '4949';

exports.config = {
    ...config,
    port: Number(port),
    hostname: hostname,
    path: '/wd/hub',
    ...{
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
