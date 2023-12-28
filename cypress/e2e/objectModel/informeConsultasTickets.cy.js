import loginPage from "../../pages/loginPage";
import validacionCodigoPage from "../../pages/validacionCodigoPage";

const test = require("../../fixtures/data-driven/login.json");

function loginSoporteInterno() {
  cy.visit("http://localhost/HelisaSoporteInterno/login.php");
  loginPage.Alert();
  cy.wait(2000);
  cy.get('#alerta').click(); 
  cy.wait(2000);
  loginPage.typeUsername("Administrador");
  loginPage.typePassword(test[0].password);
  cy.wait(2000);
  loginPage.clickLogin();
  validacionCodigoPage.validarText();
  validacionCodigoPage.token("Administrador");
  cy.wait(2000);
}

describe("Soporte Interno", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  beforeEach("Login y token", () => {
    loginSoporteInterno();
    cy.wait(2000);
  });

  it("Informe Consultas de tickets", () => {
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
    cy.get('[name="btn-consultarProgramador"]').invoke('removeAttr','target');
    cy.get('[name="btn-consultarProgramador"]').click();
  });
});