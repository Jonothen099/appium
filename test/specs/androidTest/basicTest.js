// test/specs/basicTest.js
describe('Find Elements Tests', () => {

    // it('Open the app', async () => {
    //     await driver.pause(5000)
    // })

    // finding element using accessibility id
    it('Find element by acc id', async () =>{
    // find the element
    const appOption = await $('~App')

    // if found then click it
    await appOption.click()

    // assertion
    const alarm = await $('~Alarm')

    await expect(alarm).toBeExisting()

    await alarm.click()
    })

    // find element using class name
    it('Find Element by class name', async () =>{
        // find element
        const className = await $('android.widget.TextView')
        
        // assertion 
        await expect(className).toHaveText('API Demos')

    })

    // find element using xpath
    it('Find Element by XPath', async () => {
        const animationItem = await $('//android.widget.TextView[@content-desc="Alarm Controller"]')
        console.log(animationItem)
        await expect(animationItem).toHaveText("Alarm Controller")
        
    })

    // find element using resource ID 
    it('Find element by resource ID', async () => {
        const service = await $('~Alarm Service')
        await service.click()
        const startAlarm = await $('//android.widget.Button[@content-desc="Start Alarm Service"]')
        // since dif version of android display the text diffly, then this is how to handle the text case
        const platformVersion = await driver.capabilities.platformVersion
        if(platformVersion.startsWith('14')){
            await expect(startAlarm).toHaveText("Start Alarm Service")
        }else if(platformVersion.startsWith('13')){
            await expect(startAlarm).toHaveText("START ALARM SERVICE")

        }

        
    })
    // find element using UiAutomator Android
    it('Find elements by UIAutomator and Verify Toast Message', async () => {

        await $('android=new UiSelector().textContains("Start Alarm Service")').click()
        console.log("clicked to trigger toast message")

        let toastMess = false
        for (let index = 0; index < 5; index++) {
            try {
                toastMess = await (await $('//android.widget.Toast[1]')).isExisting()
                if(toastMess) break
            } catch (error) {
                await driver.pause(500)
            }
            
        }

        // when working with toast use this finding method Toast[1] for first toast it finds 
        
        
    
        await expect(toastMess).toBe(true)
        
    })

   



});


