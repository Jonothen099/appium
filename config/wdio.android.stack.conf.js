import { config } from './wdio.shared.conf.js'
import {bsKey , bsUser} from '../env.config.js'

// config.user = "jono_MUi5pc"
// config.key = "xU54yjqtnHeX4MLsiTV6"
config.user = bsUser
config.key = bsKey
config.services = ["browserstack"]

config.specs = [
    '../test/specs/androidTest/basicTest.js'

]

config.capabilities = [
    // android Caps
    {
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        'appium:deviceName':'Google Pixel 8 Pro',
        'appium:platformVersion': '14.0',
        'appium:automationName': 'UiAutomator2', 
        'appium:orientation': 'PORTRAIT',
        'appium:app': 'bs://6d89de9eb073978accbcc6a0a96a93b00e1e8261',
        'appium:newCommandTimeout': 240
    }
]




export { config as config }


