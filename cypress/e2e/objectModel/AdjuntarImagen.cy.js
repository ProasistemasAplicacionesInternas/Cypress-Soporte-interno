import loginPage from "../../pages/loginPage";
import validacionCodigoPage from "../../pages/validacionCodigoPage";

const test = require("../../fixtures/data-driven/login.json");

function loginSoporteInterno() {
  cy.visit("http://localhost/HelisaSoporteInterno/login.php");
  loginPage.Alert();
  cy.wait(2000);
  cy.get('#alerta').click(); 
  cy.wait(2000);
  loginPage.typeUsername("gestor");
  loginPage.typePassword(test[0].password);
  cy.wait(2000);
  loginPage.clickLogin();
  validacionCodigoPage.validarText();
  validacionCodigoPage.token("gestor");
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

  it("prueba", () => {
    cy.get('#dropdownMenuButton').click(); 
    cy.wait(2000);
    cy.get('#solicitudes_internasAdmin').click(); 
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(11) > form > .btn-primary').click();
    cy.wait(2000);
    cy.get('#p_estado').select(1);
    cy.wait(2000);
    cy.get('#p_conclusiones').type("Buenos dias, ya se soluciono el inconveniente");
    /*cy.get('imagen[]').click;*/
    /*cy.get('[name="imagen[]"]').click();*/
    cy.wait(2000);
    /*cy.contains("aplicaiones internas").should("exist");*/
    cy.get('#imagenDiv > #label').should('exist');
     cy.get('#aceptar_petmai').click();
  });
});