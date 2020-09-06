
const Page = require('../page-object/Page.js')
const LogIn = require('../page-object/LogIn.js')

const homePage = new Page('/')
const logIn = new LogIn()

const DASHBOARD_URL = 'https://thinkbig-stag.firebaseapp.com/#/dashboard'
const USERNAME = 'agustincatalano@hotmail.com'
const PASSWORD = 'tortumaraka'


describe('login successful', () => {

    it('should login successful and reach the dashboard page', async () => {
        homePage.open()
        await expect(browser).toHaveTitle('Adminimo');
        await logIn.login(USERNAME, PASSWORD)
        await expect(browser).toHaveUrl(DASHBOARD_URL)  

   })


})


//TODO: not finished yet.
// describe('login failed', () => {
//     it('should fail the login and validate the error message', async () => {
//         await homePage.open()
//         await expect(browser).toHaveTitle('Adminimo');
//         await logIn.login('thisisfruit', 'yesitis')
//         const ricarda = await logIn.errorContainer
//         await expect(ricarda).toHaveText('El correo es incorrecto.') 
//     })
// })



