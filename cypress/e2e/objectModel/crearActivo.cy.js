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
    cy.wait(1000);
    cy.get('#activos').click();
    cy.wait(2000);
    cy.get('.col-1').find('a').click();
    cy.wait(2000);
    cy.get('#af_codigo').type("151502100875");
    cy.wait(2000);
    cy.get('#af_serial').type("10107080654685");
    cy.wait(2000);
    cy.get('#af_marca').type("HP");
    cy.wait(2000);
    cy.get('#af_modelo').type("Touchpad-90G-1");
    cy.wait(2000);
    cy.get('#af_nombre').type("Prueba Funcional");
    cy.wait(2000);
    cy.get('#af_fechaCompra').clear();
    cy.wait(2000);
    cy.get('#af_fechaCompra').type("2024-04-01");
    cy.wait(2000);
    cy.get('#af_categoria').select(1);
    cy.wait(2000);
    cy.get('#af_estado').select(1);
    cy.wait(2000);
    cy.get('#af_area').select(2);
    cy.wait(2000);
    cy.get('#af_ubicacion').select(1);
    cy.wait(2000);
    cy.get('#costoCompra').type("5000000");
    cy.wait(2000);
    cy.get('#vidaUtil').type("6");
    cy.wait(2000);
    cy.get('#estadoAct').select(4);
    cy.wait(2000);
    cy.get('#af_observaciones').type("Ingresamos una observacion del activo y verificamos que si se crea");
    cy.wait(2000);
    cy.get('#crear_activoFijo').click(); //crear activo
    cy.get('.col-4 > .mt-4').click();

  });
    after(() => {
    cy.log('Se finaliza la prueba');
  });
});