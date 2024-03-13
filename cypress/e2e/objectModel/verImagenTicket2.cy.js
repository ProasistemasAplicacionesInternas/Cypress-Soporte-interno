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

  it("Ver imagen en el ticket 2", () => {
    cy.wait(2000);
    cy.get(':nth-child(1) > #dropdownMenuButton').click();
    cy.wait(2000);
    cy.get('#solicitudes_internasAdmin').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(11) > form > .btn-primary').click();
    cy.wait(2000);
    cy.get('#p_estado').select(1);
    cy.wait(2000);
    cy.get('#p_conclusiones').type("Como podemos evidenciar, La imagen ya se carga apenas uno abre el ticket, En este caso es el logo de Helisa");
    cy.wait(2000);
    cy.get('#aceptar_petmai').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > #dropdownMenuButton').click();
    cy.wait(2000);
    cy.get('#solicitudes_infraestructuraAdmin').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(8) > form > #seleccionar').click();
    cy.wait(2000);
    cy.get('#p_estado').select(1);
    cy.wait(2000);
    cy.get('#p_cnclusiones').type("Como podemos evidenciar, La imagen ya se carga apenas uno abre el ticket, En este caso la imagen es de un error");
    cy.wait(2000);
    cy.get('#aceptar').click();
    cy.wait(2000);
  });
    after(() => {
    cy.log('Se finaliza la prueba');
  });
});