describe('Api Adopet', () => {
    // const tempoEsperado = Math.random() * 1000; FLAKY TEST
    // inspecionar > application > localStorage > value(token) (Bearer Token)
    

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            // network > ultimo quadrado > request url
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/818140a9-e9e4-44f7-818e-cb39899d577a',
            headers: Cypress.env()

        }).then((res) => {
            expect(res.status).to.be.equal(200) //sucesso
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
            // FLAKY TEST - teste frágil que as vezes passa, as vezes não (intermitente)
            // expect(res.duration).to.be.lte(tempoEsperado) //vamos esperar que o tempo seja inferior que a variavel tempoEsperado
        })
        // Acessamos o perfil de uma pessoa usuária via Token armazenado no LocalStorage em nosso caso de teste.
        // Utilizamos o Cypress com o cy.request para fazer requisições à API e verificar se nos dados retornados há a propriedade msg.
    })

    //1 - Faça uma request para a API do AdoPet com um usuário autenticado e verifique se, ao acessar a página de /perfil, há o nome do usuário em sua resposta.
// describe('Api Adopet', () => {
//     const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwZGQ3ZWFkNi1lYjQxLTQ1ZGQtOGE3NS0wM2IwMjI4NWJiZTciLCJhZG9wdGVyTmFtZSI6ImNhbWlsYSIsImlhdCI6MTcwODk1NTE3OCwiZXhwIjoxNzA5MjE0Mzc4fQ.fdtfjYaan12Z7SOVU02rb_HpmXt76XbhZMszI1eVJc8`
    
    // it('Nome do perfil', () => {
    //     cy.request({
    //         method: 'GET' ,
    //         url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/0dd7ead6-eb41-45dd-8a75-03b02285bbe7',
    //         headers: { authorization }
                 
    //     }).then((res) => {
    //         expect(res.status).to.be.equal(200)
    //         expect(res.body).is.not.empty
    //         expect(res.body).to.have.property('perfil')
    //         expect(res.body.perfil.nome).to.be.equal('camila')
    //         })
    // })
})