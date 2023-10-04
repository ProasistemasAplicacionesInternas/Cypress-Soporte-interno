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
    cy.get('#servidores').click();
    cy.wait(1000);
    cy.contains("Lista de Servidores").should("exist");
  });

  it("Buscar servidores", () => {
    cy.get('label > input').type("SER-CENTOS1");
    cy.wait(1000);
    cy.get('label > input').clear();
    cy.wait(1000);
    cy.get('label > input').type("Datacenter");
    cy.wait(1000);
    cy.get('label > input').clear();
    cy.wait(1000);
  });

  afterEach("Finalización prueba", () => {
    cy.wait(1000);
    cy.log("Prueba finalizada");
});
});
