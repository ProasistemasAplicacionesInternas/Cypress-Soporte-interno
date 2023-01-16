import loginPage from "../../pages/loginPage";
import validacionCodigoPage from "../../pages/validacionCodigoPage";

const test = require("../../fixtures/data-driven/login.json");

const login = () => {
    cy.visit("http://localhost/infraestructura/login.php");
    loginPage.Alert();
    loginPage.typeUsername("usuario.administrador");
    loginPage.typePassword(test[0].password);
    loginPage.clickLogin();
  };

  describe('hola', () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
    it('hola', () => {
        login();
        validacionCodigoPage.validarText();
        validacionCodigoPage.token("usuario.administrador");
        // cy.get('#servidores').click()
        // cy.get('.col-1 > a > img').click()
        cy.visit('http://localhost/infraestructura/app/view/crea_servidor.php');
    });
          
  });