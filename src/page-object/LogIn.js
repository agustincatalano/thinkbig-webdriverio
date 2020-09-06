
class LogIn{

 DASHBOARD_URL = 'https://thinkbig-stag.firebaseapp.com/#/dashboard'   

get loginContainer() {return $('.login-container')}
get usernameBox() {return $('#username')}
get passwordBox() {return $('#password')}
get loginButton() {return $('#loginBtn')}
get loginButton() {return $('#loginBtn')}
get errorContainer() {return $('.login-container .alert')}



async errorContainerIsDisplayed(){
    const errorContainer = await this.errorContainer
    await browser.$$(errorContainer)

}


async login(username, password){
    const usernameBox = await this.usernameBox
    const passwordBox = await this.passwordBox
    const loginButton = await this.loginButton
    await usernameBox.setValue(username)
    await passwordBox.setValue(password)
    await loginButton.click()
    await expect(browser).toHaveUrl('https://thinkbig-stag.firebaseapp.com/#/dashboard')
}

}

module.exports = LogIn