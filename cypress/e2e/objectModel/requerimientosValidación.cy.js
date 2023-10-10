import loginPage from "../../pages/loginPage";
import validacionCodigoPage from "../../pages/validacionCodigoPage";

const test = require("../../fixtures/data-driven/login.json");

function loginSoporteInterno() {
  cy.visit("http://localhost/HelisaSoporteInterno/login.php");
  loginPage.Alert();
  cy.wait(1000);
  loginPage.typeUsername("usuario.coordinadormai");
  loginPage.typePassword(test[0].password);
  cy.wait(1000);
  loginPage.clickLogin();
  validacionCodigoPage.validarText();
  validacionCodigoPage.token("usuario.coordinadormai");
  cy.wait(1000);
}

describe("Soporte Interno", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  beforeEach("Login y token", () => {
    loginSoporteInterno();
    cy.wait(1000);
    cy.get('#requerimientos').click();
    cy.wait(1000);
    cy.contains("Requerimientos").should("exist");
  });

  it("Seleccionar un requerimiento y dejarlo en pendiente", () => {
    cy.get(':nth-child(1) > :nth-child(13) > form > .btn-primary').parent().invoke('removeAttr', 'target');
    cy.wait(1000);
    cy.get(':nth-child(1) > :nth-child(13) > form > .btn-primary').click();
    cy.wait(1000);
    cy.get('#p_estado').select(2);
    cy.wait(1000);
    cy.get('#p_conclusiones').type("Pendiente");
    cy.wait(1000);
    cy.get('#aceptar_petmai').click();
    cy.wait(1000);
  });

  afterEach("Finalización prueba", () => {
    cy.wait(1000);
    cy.log("Prueba finalizada");
});
});
