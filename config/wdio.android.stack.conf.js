import { config } from './wdio.shared.conf.js'
import {bsKey , bsUser} from '../env.config.js'
import uploadAppToBrowserStack from '../app/upload.apps.js'; // Import the upload function


// config.user = "jono_MUi5pc"
// config.key = "xU54yjqtnHeX4MLsiTV6"
// config.beforeSession = async (config, capabilities, specs) => {
//     try {
//         // Upload the app to BrowserStack
//         const appUrl = await uploadAppToBrowserStack();

//         // if (Array.isArray(capabilities)) {
//         //     // Handle case where capabilities is an array
//         //     capabilities.forEach(capability => {
//         //         config.capability.app = appUrl;
//         //     });
//         // } else if (typeof capabilities === 'object') {
//         //     // Handle case where capabilities is a single object
//         //     config.capabilities.app = appUrl;
//         // }
//         // config.services.appUrl = appUrl
//         config.appUrl = appUrl
//     } catch (error) {
//         console.error('Failed to upload app to BrowserStack:', error.message);
//         throw error;
//         // process.exit(1); // Exit the test run if the upload fails

//     }
// }
config.user = bsUser
config.key = bsKey
config.services = [
    [
      'browserstack',
      {
        buildIdentifier: "Build",
        browserstackLocal: true, 
        app: "/Users/jono/Desktop/AutomationTesting/MyAppiumProject/app/android/ApiDemos-debug.apk"
      },
    ]
  ]

config.specs = [
    '../test/specs/androidTest/basicTest.js'

]


config.capabilities = [{
    "platformName" : "android",
    "appium:platformVersion" : "13.0",
    "appium:deviceName" : "Samsung Galaxy S23 Ultra",
    'appium:automationName': 'UiAutomator2', 
    // "appium:app" : "bs://171147c135a7f4e4fc3287c7480eb7339e933e42",
    'bstack:options' : {
      "projectName" : "OneApp",
      "buildName" : "Verify Toast Message",
      "sessionName" : "Test on Samsung",
      "networkLogs" : "true",
      "appProfiling" : "true",
    }
   }, 

   //         // capabilities for local Appium web tests on an Android Emulator
   {
    platformName: 'android',
    'appium:deviceName':'Google Pixel 8 Pro',
    'appium:platformVersion': '14.0',
    'appium:automationName': 'UiAutomator2', 
    'appium:orientation': 'PORTRAIT',
    // 'appium:newCommandTimeout': 240, 
    'bstack:options' : {
        "projectName" : "OneApp",
        "buildName" : "Verify Toast Message",
        "sessionName" : "Test on Pixel",
        "networkLogs" : "true",
        "appProfiling" : "true",
      }
   }
     

]
   







export { config as config }


