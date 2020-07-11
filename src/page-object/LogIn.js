
class LogIn{

get loginContainer() {return $('.login-container')}
get usernameBox() {return $('#username')}
get passwordBox() {return $('#password')}
get loginButton() {return $('#loginBtn')}





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