// Testa as regras do formulário de contato (index.html) com a validação nativa do HTML.
const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf-8');

function campoIdade() {
  const { document } = new JSDOM(html).window;
  const idade = document.querySelector('#idade');
  assert.ok(idade, 'o formulário deve ter o campo #idade');
  return idade;
}

test('recusa idade menor que 14 anos', () => {
  const idade = campoIdade();
  idade.value = '13';
  assert.strictEqual(idade.checkValidity(), false);
  assert.strictEqual(idade.validity.rangeUnderflow, true);
});

test('aceita idade a partir de 14 anos', () => {
  const idade = campoIdade();
  for (const valor of ['14', '30', '100']) {
    idade.value = valor;
    assert.strictEqual(idade.checkValidity(), true, `deveria aceitar ${valor}`);
  }
});

test('idade é obrigatória', () => {
  const idade = campoIdade();
  idade.value = '';
  assert.strictEqual(idade.checkValidity(), false);
  assert.strictEqual(idade.validity.valueMissing, true);
});
