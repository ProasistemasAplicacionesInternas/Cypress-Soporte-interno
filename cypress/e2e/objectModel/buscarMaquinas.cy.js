import loginPage from "../../pages/loginPage";
import validacionCodigoPage from "../../pages/validacionCodigoPage";

const test = require("../../fixtures/data-driven/login.json");

function loginSoporteInterno() {
  cy.visit("http://localhost/HelisaSoporteInterno/login.php");
  loginPage.Alert();
  cy.wait(1000);
  loginPage.typeUsername("jhon.torres");
  loginPage.typePassword(test[0].password);
  cy.wait(1000);
  loginPage.clickLogin();
  validacionCodigoPage.validarText();
  validacionCodigoPage.token("jhon.torres");
  cy.wait(1000);
}

describe("Soporte Interno", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  beforeEach("Login y token", () => {
    loginSoporteInterno();
    cy.wait(1000);
    cy.get('#maquinas').click(); 
    cy.wait(1000);
    cy.contains("Lista de Máquinas Virtuales").should("exist");
  });

  it("Buscar maquinas", () => {
    cy.get('label > input').type("Calle 45");
    cy.wait(1000);
    cy.get('label > input').clear();
    cy.wait(1000);
    cy.get('label > input').type("DEMOKORA");
    cy.wait(1000);
    cy.get('label > input').clear();
    cy.wait(1000);
  });

  afterEach("Finalización prueba", () => {
    cy.wait(1000);
    cy.log("Prueba finalizada");
});
});
