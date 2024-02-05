const {test, expect} = require('@playwright/test')

test('My first test with PW', async ({page}) => {

    await page.goto('https://google.com')
    await expect(page).toHaveTitle('Google')
})

//OBSERVAÇÕS
//Tem que usar o ASYNC antes de uma função para garantir que retorna uma promessa
// Tem que usar o AWAIT para a função esperar por essa promessa