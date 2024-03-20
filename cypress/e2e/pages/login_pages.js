export class LoginPage{

    loginPage_username_textbox = '#UserName'
    loginPage_password_textbox = ':nth-child(5) > .col-md-9 > .form-group > .form-control'
    loginPage_captcha_textbox = ':nth-child(7) > .col-md-9 > .form-group > .form-control'
    loginButton = '.btn'

    enterUserName(username){
        cy.get(this.loginPage_username_textbox).type(username)
        cy.get(this.loginButton).click()
    }

    enterPassword(password){
        cy.get(this.loginPage_password_textbox).type(password)
    }

    enterCaptcha(captcha){
        cy.get(this.loginPage_captcha_textbox).type(captcha)
    }

    clickLogin(){
        cy.get(this.loginButton).click()
    }
}