import loginPage from "../../pages/loginPage";
import validacionCodigoPage from "../../pages/validacionCodigoPage";

const test = require("../../fixtures/data-driven/login.json");

function loginSoporteInterno() {
  cy.visit("http://localhost/HelisaSoporteInterno/login.php");
  loginPage.Alert();
  cy.wait(2000);
  cy.get('#alerta').click(); 
  cy.wait(2000);
  loginPage.typeUsername("administrador");
  loginPage.typePassword(test[0].password);
  cy.wait(2000);
  loginPage.clickLogin();
  validacionCodigoPage.validarText();
  validacionCodigoPage.token("administrador");
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

  it("Ver Nuevos Campos en Activos fijos", () => {
    cy.get('#categories').click(); 
    cy.wait(2000);
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(5) > .fas').click(); //Modificar Grupo
    cy.wait(2000);
    cy.get('#categoryGroup').select(1);
    cy.wait(2000);
    cy.get('#updateGroup > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click(); //guardar modificar grupo
    cy.wait(3000);
     cy.get(':nth-child(1) > :nth-child(5) > .fa-regular').click(); //inhabilitar Grupo 
     cy.wait(3000);
     cy.get(':nth-child(1) > :nth-child(5) > .fa-regular').click();  //<-- Habilita  Grupo
     cy.wait(2000);
  });
    after(() => {
    cy.log('Se finaliza la prueba');
  });
});