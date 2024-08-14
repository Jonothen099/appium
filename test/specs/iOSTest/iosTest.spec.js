describe('IOS Simple Test', ()=>{
     // Simply finding element using Accessibility ID
    //  it('Find Element by accessibilty ID', async () =>{
    //     await  $('~Buttons').click()
    //     const add = await  $('~add')
    //     await expect(add).toHaveText("add")

    //  })
    
    // simply finding element using XPath
    // it('Find Element by XPath', async ()=>{
    //     await $('//XCUIElementTypeTable/XCUIElementTypeCell[1]/XCUIElementTypeOther[1]/XCUIElementTypeOther').click()
    //     const loading = await $('(//XCUIElementTypeActivityIndicator[@name="In progress"])[1]')
    //     await expect(loading).toExist()
    // })

    //work with alert view
    // it('Working with alert view', async () =>{
    //     await $('~Alert Views').click()
    //     const alert = await $('~Okay / Cancel').click()
    //     const alertView = await $('~A message should be a short, complete sentence.')
    //     await expect(alertView).toBeExisting()
    //     await driver.acceptAlert()
    //     await expect(alertView).not.toExist()

    // })
    // Find Item/Items using tag name 
    it('Find element by tag name', async () =>{
        const textList = await $$('XCUIElementTypeStaticText')

        for (const item of textList) {
            console.log("Item is " + await item.getText())
        }
    })
    



})

