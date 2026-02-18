const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //projectId: "7bjtos",
  projectId: "7hdhsa",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // cypress conseguir gravar os testes em vídeo
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results', //diretorio onde vai ficar os relatorios
      overwrite: false, // não vai sobreescrever
      html: true, //pode gerar um arquivo em html
      json: false,
      timestamp: "mmddyyyy_HHMMss" }
  },
});


