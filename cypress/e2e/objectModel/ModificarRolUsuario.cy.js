import LoginPage from "../../pages/loginPage2";
import validacionCodigoPage from "../../pages/validacionCodigoPage";


const login = () => {
  cy.viewport(1280, 720)
  cy.visit("http://localhost/infraestructura1/login.php");
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
    it("Modificar Rol Usuario", () => {
    cy.wait(2000);
    cy.get(':nth-child(10) > #dropdownMenuButton').click();
    cy.wait(2000);
    cy.get('#usuarios').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(7) > #btn-modificarUsuario').click();
    cy.wait(2000);
    cy.get('.fila > :nth-child(1) > form.form-group > .row > :nth-child(2) > #id_roles').select(7);
    cy.wait(2000);
    cy.get('#guardar').click();
    cy.wait(2000);
    });
      after(() => {
      cy.log('Se finaliza la prueba');
    });
  });

