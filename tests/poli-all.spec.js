import { test, expect } from '@playwright/test';

test('Testando Login & Logout do Portal da empresa ', async ({ page }) => {
    await page.goto('https://dev2.polibr.com.br/v8/#/login/auth');
    //Login
    await page.getByPlaceholder('Empresa').fill('P111');
    await page.getByPlaceholder('Usuário').fill('lucas.araujo@polibrasnet.com.br');
    await page.getByPlaceholder('Senha').fill('XXXX');
    await page.getByRole('button', { name: 'Entrar' }).click();
    //Logout
    await page.locator('.ant-avatar').click(); //esse eu tive que mudar manualmente
//    await page.getByRole('button').nth(3).click();
    await page.getByRole('button', { name: 'logout' }).click();
    await page.getByRole('button', { name: 'Sim' }).click();
    //Login novamente
    await page.getByPlaceholder('Empresa').fill('P111');
    await page.getByPlaceholder('Usuário').fill('lucas.araujo@polibrasnet.com.br');
    await page.getByPlaceholder('Senha').fill('XXXX');
    await page.getByRole('button', { name: 'Entrar' }).click();
    //Entrando em alguma funcionalidade (Roteirizze)
    await page.getByText('Roteirizze').click();
    await page.getByText('Ferramentas').click();
    await page.getByText('Roteirizações', { exact: true }).click();
    await page.getByRole('link', { name: 'Nova Roteirização' }).click();
});

test('Iniciando uma Pré-rot', async ({ page }) => {
    await page.goto('https://dev2.polibr.com.br/v8/#/login/auth');
    //Login
    await page.getByPlaceholder('Empresa').fill('P111');
    await page.getByPlaceholder('Usuário').fill('lucas.araujo@polibrasnet.com.br');
    await page.getByPlaceholder('Senha').fill('XXXX');
    await page.getByRole('button', { name: 'Entrar' }).click();
    //teste começa aqui
    await page.getByRole('menu').getByText('Roteirizze').click();
    await page.getByRole('menuitem', { name: 'Ferramentas' }).locator('span').click();
//    await page.getByRole('menuitem', { name: 'Ferramentas' }).click();
    await page.getByText('Pré-Roteirizações').click();
    await page.getByRole('row', { name: '1500607 CECVB001 -3.7339158' }).getByLabel('').check();
    await page.getByRole('button', { name: 'Avançar ' }).click();
    await page.getByRole('button', { name: 'right CECVB001 Com exceção de' }).click();
    await page.getByLabel('Select all').uncheck();
    await page.getByRole('row', { name: '1034883 ANDRECIA SOARES DE' }).getByLabel('', { exact: true }).check();
    await page.getByRole('button', { name: 'Avançar ' }).click();
    await page.locator('div').filter({ hasText: /^Pré-roteirizaçãoCarregando\.\.\.$/ }).first().click();
});