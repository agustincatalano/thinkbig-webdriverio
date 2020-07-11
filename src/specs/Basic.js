
const Page = require ('../page-object/Page.js')
const LogIn = require('../page-object/LogIn.js')

const homePage = new Page('/')
const logIn = new LogIn()


describe('thinkbig main page', () => {
    it('should have the right title', async () => {
        homePage.open()
        await expect(browser).toHaveTitle('Adminimo');    
        await logIn.login('agustincatalano@hotmail.com','tortumaraka')
             
    })
})