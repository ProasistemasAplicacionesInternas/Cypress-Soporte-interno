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
    it('opcion izquierda', () => {
      cy.wait(2000);
      cy.get('#activos').click();
      cy.wait(2000);
      cy.get('#criterio').select(1);
      cy.wait(2000);
      cy.get('#codigoActivo').type("98025678128-");
      cy.wait(2000);
      cy.get('#btn-consultarCodigo').click();
      cy.wait(2000);
      cy.get(':nth-child(8) > form > .btn').click();
      cy.wait(2000);
      cy.get('#af_observaciones').clear();
      cy.get('#af_observaciones').type("Como podemos ver trae todos los campos y se pueden modificar");
      cy.wait(2000);
      cy.get('#guardar_modificaciones').click();
      cy.wait(2000);          
    });
      after(() => {
      cy.log('Se finaliza la prueba');
    });
  });

