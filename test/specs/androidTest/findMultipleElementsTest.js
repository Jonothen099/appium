// Multiple elements finding 
describe('Find Multiple Elements', () =>{



  
//     // working with multiple elements 
//     it('Find Multiple elements using their class name', async () =>{
//         await driver.startActivity( "io.appium.android.apis", ".ApiDemos")

//         const actualArray = ["API Demos", "Access'ibility", "Accessibility", "Animation", "App", "Content", "Graphics", "Media", "NFC", "OS", "Preference", "Text", "Views"]
//         let expectedTArray = []
//        const textList = await $$('android.widget.TextView')

//        for(let item of textList){
//            expectedTArray.push(await item.getText())
           
//        }
//        await expect(expectedTArray).toEqual(actualArray)
//    })

//    it('Validate Text Field Value', async () => {
//     await $('~Views').click()
//     await $('~Auto Complete').click()
//     const top = $('~1. Screen Top').click()

//     // await expect(top).toHaveText("1. Screen Top")
//     let tf = await $('//android.widget.AutoCompleteTextView[@resource-id="io.appium.android.apis:id/edit"]')
//     await tf.addValue('Canada')
//     await expect(tf).toHaveText('Canada')

//    })

    // Go to specific page of the app using app package and activity/screen 
//    it('Access an activity directly', async () =>{
//     // await driver.startActivity( "io.appium.android.apis", ".app.AlertDialogSamples")
//     await driver.startActivity( "io.appium.android.apis", ".ApiDemos")

//     await $('~App').click()
//    })
   // Working with alert view
//    it('Working with alert dialog', async () => {
//     await $('~App').click()
//     // go to alert view
//     await $('~Alert Dialogs').click()
//     // click alert view
//     await $('~OK Cancel dialog with a message').click()

//     // verify that alert view is displayed
//     const alert = await $('//android.widget.TextView[@resource-id="android:id/alertTitle"]')
//     // await driver.dismissAlert()
//     // await driver.getAlertText()

//     await driver.acceptAlert()
//     await expect(alert).not.toExist()



//    })

    // Working with scroll view
//    it('Scrolling Vertically', async ()=>{
//     // await driver.startActivity( "io.appium.android.apis", ".ApiDemos")
//     await $('~App').click()
//     await $('~Activity').click()
//     //Scroll and keep scrolling till the specified text/accessibility id is found
//     const sur = await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")')
//     // scroll to the end of the list according to specified params Ints in this instance
//     // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,3)')
//     // when scrolling, if the item found on the list, somehow it needed pause before clicking it otherwise nothing will happen
//     await driver.pause(2000)
//     await sur.click()
//     const dialog = await $('~Secure Dialog')
//     await expect(dialog).toExist()


//    })
    // Working with horizontal scroll view
//    it('Scrolling Horizontally To find element', async () =>{
//     await driver.startActivity( "io.appium.android.apis", ".view.Gallery1")
//     // this will scroll from left to right horizontally
//     await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
//     const img = await $('//android.widget.Gallery[@resource-id="io.appium.android.apis:id/gallery"]/android.widget.ImageView[3]')
//     // await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollTextIntoView(new UiSelector().class("android.widget.ImageView"))')
//     await expect(img).toBeDisplayed()
//    })

   // Course Challenge Changing date using scroll and other stuff 

//    it('Scroll on Date Picker, Change Date, Verify Date has been changed', async () => {
//     await driver.startActivity( "io.appium.android.apis", ".view.DateWidgets1")
//     const date = await $('//android.widget.TextView[@resource-id="io.appium.android.apis:id/dateDisplay"]')
//     const currentDate = await date.getText()
//     await $('~change the date').click()
//     await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')
//     await $('~10 September 2024').click()

//     await $('//android.widget.Button[@resource-id="android:id/button1"]').click()
//     const newDate = await date.getText()

//     await expect(currentDate).not.toEqual(newDate)
//    })

})