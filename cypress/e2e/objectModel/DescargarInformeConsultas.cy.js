import LoginPage from "../../pages/loginPage2";
import validacionCodigoPage from "../../pages/validacionCodigoPage";


const login = () => {
  cy.viewport(1280, 720)
  cy.visit("http://localhost/infraestructura/login.php");
  cy.wait(1000);
  LoginPage.login("administrador");
  cy.wait(1000);
  cy.wait(1000);
  validacionCodigoPage.token("administrador");
};

describe("Verificar Login", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
    beforeEach(() => {
      login();
    });
    it("Descargar Informe Consultas de tickets", () => {
      cy.wait(2000);
      cy.get(':nth-child(4) > #dropdownMenuButton').click();
      cy.wait(2000);
      cy.get('#consultarPeticiones').click();
      cy.wait(2000);
      cy.get('#area').select(2);
      cy.wait(2000);
      cy.get('#criterio').select(3);
      cy.wait(2000);
      cy.get('#programadorFiltro').select(5);
      cy.wait(2000);
      cy.get('[name="btn-consultarProgramador"]').parents().invoke('removeAttr','target');
      cy.get('[name="btn-consultarProgramador"]').click();
      cy.wait(2000);
    //   cy.contains('Exportar a Excel').click();
    //   cy.contains('Exportar a Excel').should('be.visible');
      cy.get('.dt-button > span').click();
      cy.wait(2000);
    });
      after(() => {
      cy.log('Se finaliza la prueba');
    });
  });

