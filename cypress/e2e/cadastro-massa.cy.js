import { usuarios } from '../fixtures/usuarios.json'

describe('Página de Cadastro', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app'); //visitar
        cy.get('[data-test="register-button"]').click(); //clicar
    })
    // vai percorrer porCada objeto da array 
    usuarios.forEach(usuario => {
        it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
            cy.get('[data-test="input-name"]').clear().type(usuario.name);
            cy.get('[data-test="input-email"]').clear().type(usuario.email);
            cy.get('[data-test="input-password"]').clear().type(usuario.password);
            cy.get('[data-test="input-confirm-password"]').clear().type(usuario.password);
            cy.get('[data-test="submit-button"]').click();
        })
    })
})
// O código importa o arquivo usuários por meio do import, acessa a página e clica no botão de registro. Em seguida, o método forEach() da linguagem JavaScript itera por cada índice do Array de Objetos os métodos do cypress são responsáveis por limpar o campo de input e fazer a digitação de cada propriedade do objeto usuário, validando assim se os campos do site apresentam o comportamento esperado.
