import loginPage from "../../pages/loginPage";
import validacionCodigoPage from "../../pages/validacionCodigoPage";

const test = require("../../fixtures/data-driven/login.json");

function loginSoporteInterno() {
  cy.visit("http://localhost/HelisaSoporteInterno/login_peticiones.php");
  loginPage.Alert();
  cy.wait(2000);
  cy.get('#alerta').click(); 
  cy.wait(2000);
  loginPage.typeUsername("maria.suarez");
  loginPage.typePassword(test[0].password);
  cy.wait(2000);
  loginPage.clickLogin();
  validacionCodigoPage.validarText();
  validacionCodigoPage.token("maria.suarez");
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

  it("Validación de activos al correo", () => {
    cy.wait(2000);
    cy.get(':nth-child(5) > #dropdownMenuButton').click();
    cy.wait(2000);
    cy.get('#accesos').click();
    cy.wait(2000);
    cy.get('.col-1 > a > img').click();
    cy.wait(2000);
    cy.get('#plataformas212').check();
    cy.wait(2000);
    cy.get('#descripcion').type("Necesito esta plataforma");
    cy.wait(2000);
    cy.get('#crear_peticion_accesos').click();
    cy.wait(2000);
    cy.get(':nth-child(5) > #dropdownMenuButton').click();
    cy.wait(2000);
    cy.get('#accesos').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > .nav-link').click();
    cy.wait(2000);
    cy.get('.odd > [style="text-align:center"] > form > [type="button"]').click();
    cy.wait(2000);
    cy.get('#aprobado').select(2);
    cy.wait(2000);
    cy.get('#conclusiones').type("Se Aprueba petición");
    cy.wait(2000);
    cy.get('#guardarAprociones').click();
    cy.wait(2000);
    cy.get(':nth-child(5) > #dropdownMenuButton').click();
    cy.wait(2000);
    cy.get('#accesos').click();
    cy.wait(2000);
    cy.get(':nth-child(3) > .nav-link').click();
    cy.wait(2000);
    cy.get('.odd > [style="text-align:center"] > form > [type="button"]').click();
    cy.wait(2000);
    cy.get('#nombre_usuario0').type("Prueba");
    cy.wait(2000);
    cy.get('#clave0').type("Prueba");
    cy.wait(2000);
    cy.get('.btn-primary').click();
  });
    after(() => {
    cy.log('Se finaliza la prueba');
  });
});