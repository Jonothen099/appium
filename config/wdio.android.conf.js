import { config } from './wdio.shared.conf.js'

config.port = 4725

config.specs = [
    '../test/specs/androidTest/basicTest.js'

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

config.capabilities = [
    // android Caps
    {
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:deviceName': 'Pixel8Pro',
        'appium:platformVersion': '15.0',
        'appium:automationName': 'UiAutomator2', 
        'appium:orientation': 'PORTRAIT',
        'appium:app': '/Users/jono/Desktop/AutomationTesting/MyAppiumProject/app/android/ApiDemos-debug.apk',
        'appium:newCommandTimeout': 240
    }
]

export { config as config }
