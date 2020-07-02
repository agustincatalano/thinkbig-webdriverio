
const Page = require ('../page-object/Page.js')


describe('thinkbig main page', () => {
    it('should have the right title', async () => {
        Page.open()
        await expect(browser).toHaveTitle('Adminimo');    
    })
})