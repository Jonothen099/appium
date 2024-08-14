import { config } from './wdio.shared.conf.js'

config.port = 4723

config.specs = [
    // '/Users/jono/Desktop/AutomationTesting/MyAppiumProject/test/specs/iOSTest/iosTest.spec.js'
    '../test/specs/iOSTest/iosTest.spec.js'

]

config.capabilities = [
    // iOS Caps
    {
        platformName: 'ios',
        'appium:deviceName': 'iPhone 15 Pro Max',
        'appium:platformVersion': '17.0',
        'appium:automationName': 'XCUITest', 
        'appium:orientation': 'PORTRAIT',
        'appium:app': '/Users/jono/Desktop/AutomationTesting/MyAppiumProject/app/ios/UIKitCatalog.app',
        'appium:newCommandTimeout': 240
    }
]

config.services = [
    [
        'appium',
        {
        // For options see
        // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
            args: {
            // For arguments see
            // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
            },
            command: 'appium',
        },
    ],
]
export { config as config }
// const _config = config
// export { _config as config }