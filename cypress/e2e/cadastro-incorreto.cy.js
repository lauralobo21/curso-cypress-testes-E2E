describe('Página de Cadastro', () => {
  it('Deve preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app'); //visitar
    cy.get('[data-test="register-button"]').click(); //clicar
    cy.get('[data-test="submit-button"]').click();
    // vamos verificar se tem a mensagem de erro na página
    cy.contains('É necessário informar um endereço de email').should('be.visible');
    cy.contains('Crie uma senha').should('be.visible');
    cy.contains('Repita a senha criada acima').should('be.visible');

  })
})
