describe('My Demo application', () => {

    it('login with valid credentials', async () => {
        browser.url('https://the-internet.herokuapp.com/login')
        await $('#username').setValue("tomsmith")
        await $('#password').setValue("SuperSecretPassword!")
        await $('button[type="submit"]').click()
        browser.pause(2000)
    })
})