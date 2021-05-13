const { config } = require('../wdio.conf');

exports.config = {
    ...config,
    ...{
        services: ['geckodriver'],
        screenshotPath: `./errorShots/firefox/`,
        capabilities: [
            {
                maxInstances: 5,
                browserName: 'firefox',
                'moz:firefoxOptions': {
                    //args:['-headless']
                }
            }
        ]
    }
}