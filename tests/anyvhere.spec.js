import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.locator('body').click();
    await page.goto('https://app-staging.anywhere.polibr.com.br/');
    await page.getByPlaceholder('Login').click();
    await page.locator('input[type="text"]').fill('vb014@p111');
    await page.getByPlaceholder('Senha').click();
    await page.getByPlaceholder('Senha').fill('XXXX');
    await page.locator('div').filter({ hasText: /^LOGIN$/ }).nth(3).click();
    await page.goto('https://app-staging.anywhere.polibr.com.br/');
    await page.getByRole('link', { name: 'Roteiro' }).click();
    await page.locator('div:nth-child(3) > div > div > .css-9pa8cd').click();
    await page.getByPlaceholder('Texto para NF *').click();
    await page.getByPlaceholder('Texto para NF *').fill('666');
    await page.getByPlaceholder('Texto Livre *').click();
    await page.getByPlaceholder('Texto Livre *').fill('testando');
    await page.getByPlaceholder('Número do pedido').click();
    await page.getByPlaceholder('Número do pedido').fill('9090');
});