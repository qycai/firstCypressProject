import signUpPage from './weiboSignUpPage'

describe('weibo sign up test', () => {
    beforeEach('visit sign up page of weibo', () => {
        cy.visit('https://weibo.com/signup/signup.php')
    })
    it('should sign up in weibo successfully', () => {
        // cy.eyesOpen({
        //     appName: 'Hello World!',
        //     testName: 'My first JavaScript test!',
        //     browser: { width: 800, height: 600 }
        // })
        signUpPage.inputUserName('123')
        // cy.eyesCheckWindow('')
        signUpPage.inputPassword('123098')
        signUpPage.selectBirthday('1995', '2', '21')
        signUpPage.inputPinCode('123')
        signUpPage.submit()
        // cy.eyesCheckWindow('')
        // cy.eyesClose()
        signUpPage.shouldShowErrorMessage('手机号长度11位，以13/14/15/16/17/18/19开头')
    })
})
