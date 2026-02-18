describe('Página de Login', () => {
    // antes de cada coisa, faça:
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app'); //visitar
        cy.get('[data-test="login-button"]').click(); //clicar em login
    })

    it('Deve preencher os campos de login corretamente e autenticar o usuário na página', () => {

    // vamos chamar o comando personalizado:
    cy.login('ana1@hotmail.com', 'Senha123');
    // cy.get('[data-test="input-loginEmail"]').type('ana1@hotmail.com'); //escrever o email válido
    // cy.get('[data-test="input-loginPassword"]').type('Senha123');
    // cy.get('[data-test="submit-button"]').click();
  })
})


// describe('Página de Login', () => {
//     // antes de cada coisa, faça:
//     beforeEach(() => {
//         cy.visit('https://adopet-frontend-cypress.vercel.app'); //visitar
//     })

//     it('Deve preencher os campos de login corretamente e autenticar o usuário na página pelo botão de ícone de mensagem', () => {
//         cy.get('.header__message').click(); // clicando no ícone de mensagem 
//         cy.get('[data-test="input-loginEmail"]').type('ana1@hotmail.com'); //escrever o email válido
//         cy.get('[data-test="input-loginPassword"]').type('Senha123');
//         cy.get('[data-test="submit-button"]').click();
//   })
// })
