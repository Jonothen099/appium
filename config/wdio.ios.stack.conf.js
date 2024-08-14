import { config } from './wdio.shared.conf.js'
import {bsKey , bsUser} from '../env.config.js'


// config.user = "jono_MUi5pc"
// config.key = "xU54yjqtnHeX4MLsiTV6"
config.user = bsUser
config.key = bsKey
config.services = ["browserstack"]

config.specs = [
    '../test/specs/iOSTest/ios.test.stack.js'

]

config.capabilities = [
    // android Caps
    {
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'ios',
        'appium:deviceName': 'iPhone 15 Pro Max',
        'appium:platformVersion': '17',
        'appium:automationName': 'XCUITest', 
        'appium:orientation': 'PORTRAIT',
        'appium:app': 'bs://854adc997551a6a94358edf09b93bf165af5ab98'
    }, 
    {
    
        platformName: 'ios',
        'appium:deviceName': 'iPhone 11',
        'appium:platformVersion': '14',
        'appium:automationName': 'XCUITest', 
        'appium:orientation': 'PORTRAIT',
        'appium:app': 'bs://854adc997551a6a94358edf09b93bf165af5ab98'

    }, 
    {
   
        platformName: 'ios',
        'appium:deviceName': 'iPhone 12 Mini',
        'appium:platformVersion': '16',
        'appium:automationName': 'XCUITest', 
        'appium:orientation': 'PORTRAIT',
        'appium:app': 'bs://854adc997551a6a94358edf09b93bf165af5ab98'
    }
]




export { config as config }


