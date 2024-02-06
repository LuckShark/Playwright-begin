import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.locator('.L3eUgb > div:nth-child(2)').click();
    await page.getByLabel('Pesquisar', { exact: true }).click();
    await page.getByLabel('Pesquisar', { exact: true }).press('CapsLock');
    await page.getByLabel('Pesquisar', { exact: true }).fill('P');
    await page.getByLabel('Pesquisar', { exact: true }).press('CapsLock');
    await page.getByLabel('Pesquisar', { exact: true }).fill('Playstation 5');
    //Ele vai falhar aqui, por que nesse teste eu cliquei em ENTER
    //Ele não reconheceu.
    await page.getByRole('link', { name: 'Amazon.com.br Amazon.com.br https://www.amazon.com.br', exact: true }).click();
});