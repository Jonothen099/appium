describe('IOS Test on browser stack', ()=>{
   
   it('Find element acc id ', async () =>{
       const alert = await $$('~Alert')

      await expect(alert).toHaveText("Alert")
   })
   



})