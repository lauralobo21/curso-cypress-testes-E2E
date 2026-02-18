describe('Página de Cadastro', () => {
  beforeEach (() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app'); //visitar
    cy.get('[data-test="register-button"]').click(); //clicar
  })

  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.cadastro('Ana de Jesus', 'ana1@hotmail.com', 'Senha123');

    // cy.get('[data-test="input-name"]').type('Ana de Jesus'); //digita
    // cy.get('[data-test="input-email"]').type('ana1@hotmail.com');
    // cy.get('[data-test="input-password"]').type('Senha123');
    // cy.get('[data-test="input-confirm-password"]').type('Senha123');
    // cy.get('[data-test="submit-button"]').click();
  })
})


// describe('falar com responsavel', () => {
//   it('passes', () => {
//     cy.visit('https://adopet-frontend-cypress.vercel.app');
//     cy.contains('a', 'Fazer login').click(); 
//     cy.get('input[name="email"]').type('ana1@hotmail.com');
//     cy.get('input[name="password"]').type('Senha123');
//     cy.contains('button', 'Entrar').click();

//     cy.contains('a', 'Falar com responsável').click();
//   })
// })

//2 - Visite a página de principal do AdoPet e teste os botões header.
//   it("Visita a página de principal do AdoPet e testa os botão de home", ()=>{
//         cy.visit('https://adopet-frontend-cypress.vercel.app/');
//         cy.get('.header__home').click()  

//     })