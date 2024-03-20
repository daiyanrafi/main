//page-object-model

// import { describe } from 'mocha'
// import { beforeEach } from 'mocha'
import { LoginPage } from './pages/login_pages'

const loginPage = new LoginPage()


describe('All GG ma man', () => {

    beforeEach(()=>{
        cy.visit('https://rds3.northsouth.edu/index.php/')
    })

    it('POM DEMO-1', function () {

        // cy.visit('https://rds3.northsouth.edu/index.php/')

        loginPage.enterUserName('XXXXXXX')
        loginPage.enterPassword('XXXXXXX')
        loginPage.enterCaptcha('7445')
        loginPage.clickLogin()

    }),

    it('POM DEMO-2', function () {

        // cy.visit('https://rds3.northsouth.edu/index.php/')

        loginPage.enterUserName('1722270')
        loginPage.enterPassword('Dhaka1234')
        loginPage.enterCaptcha('7445')
        loginPage.clickLogin()

    })
})