import axios from 'axios';
import fs from 'fs';
import path from 'path';
import {bsKey , bsUser} from '../env.config.js'
import { execSync } from 'child_process';



async function uploadAppToBrowserStack() {
    // const username = bsUser // Set in environment variables
    // const accessKey = bsKey; // Set in environment variables
    // // const appPath = path.join(process.cwd(), './app/android/ApiDemos-debug.apk'); // Path to your local app file
    // const appPath = "/Users/jono/Desktop/AutomationTesting/MyAppiumProject/app/android/ApiDemos-debug.apk"

    // try {
    //     const response = await axios.post(
    //         "https://api-cloud.browserstack.com/app-automate/upload",
    //         fs.createReadStream(appPath),
    //         {
    //             auth: {
    //                 username: username,
    //                 password: accessKey
    //             },
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         }
    //     );

    //     if (response.data && response.data.app_url) {
    //         console.log('App uploaded successfully:', response.data.app_url);
    //         return response.data.app_url; // Use this URL in your WebdriverIO configuration
    //     } else {
    //         throw new Error('Failed to upload app.');
    //     }
    // } catch (error) {
    //     console.error('Error uploading app to BrowserStack:', error.message);
    //     throw error;
    // }

    const command = `
    curl -u "${bsUser}:${bsKey}" \
    -X POST "https://api-cloud.browserstack.com/app-automate/upload" \
    -F "file=@/Users/jono/Desktop/AutomationTesting/MyAppiumProject/app/android/ApiDemos-debug.apk"
`;

try {
    const response = execSync(command, { encoding: 'utf8' });
    const parsedResponse = JSON.parse(response);
    console.log('App uploaded successfully:', parsedResponse.app_url);
    return parsedResponse.app_url;
} catch (error) {
    console.error('Error uploading app with curl:', error.message);
    throw error;
}
}

// Export the function to use it in your test setup
export default uploadAppToBrowserStack;
