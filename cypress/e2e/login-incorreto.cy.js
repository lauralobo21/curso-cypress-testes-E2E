
describe('Página de Login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app'); //visitar
    cy.get('[data-test="login-button"]').click(); //clicar em login
    cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
      statusCode:400, }).as('stubPost')
      // Utilizamos os interceptadores (stubs) para simular respostas da API durante os testes.
      // O Dublê de testes para simular a resposta da API e lançar o erro para que a mensagem adequada seja exibida ao usuário.
  })

  it('Verifica mensagem de falha no login', () => {
    cy.get('[data-test="submit-button"]').click();
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Insira sua senha').should('be.visible');
  })

  it('Deve falhar mesmo que os campos sejam preechidos corretamente', () => {
    cy.login('ana1@hotmail.com', 'Senha123');
    cy.wait('@stubPost');
    cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
  })
})




// describe('Página de Login', () => {
//     // antes de cada coisa, faça:
//     beforeEach(() => {
//         cy.visit('https://adopet-frontend-cypress.vercel.app'); //visitar
//         cy.get('[data-test="login-button"]').click(); //clicar em login
//     })

//     it('Deve preencher os campos de login incorretamente e exibir mensagens de erro ao usuário na página', () => {
//     cy.get('[data-test="input-loginEmail"]').type('ana1@.com'); //escrever o email válido
//     cy.get('[data-test="input-loginPassword"]').type('senha');
//     cy.get('[data-test="submit-button"]').click();
//     cy.contains('Por favor, verifique o email digitado').should('be.visible');
//     cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
//   })
// })