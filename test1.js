import { Selector } from 'testcafe';

fixture `Getting Started`
  .page `http://devexpress.github.io/testcafe/example`;

test('My first test', async t => {
  // Test code
  await t
    .typeText('#developer-name', 'Anson Felder')
    .click('#submit-button')
    .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!')
});

test('My second test', async t => {
  // Test code
  await t
    .typeText('#developer-name', 'Anson Felder')
    .click('#submit-button')
    .expect(Selector('#article-header').innerText).eql('Thank you, Anson Felder!')
});
