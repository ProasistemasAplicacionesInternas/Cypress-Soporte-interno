import loginPage from "../../pages/loginPage";
import validacionCodigoPage from "../../pages/validacionCodigoPage";

const test = require("../../fixtures/data-driven/login.json");

function loginSoporteInterno() {
  cy.visit("http://localhost/infraestructura/login_peticiones.php");
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

  it("Ver imagen en el ticket 1", () => {
    cy.wait(2000);
    cy.get('#validationTicket').click();
    cy.wait(2000);
    cy.get('#generar_solicitud').click();
    cy.wait(2000);
    cy.get('.col-1').find('a').click();
    cy.wait(2000);
    cy.get('#area_peticion').select(1);
    cy.wait(2000);
    cy.get('#p_categoria').select(4);
    cy.wait(2000);
    cy.get('#p_descripcion').type("Creamos el ticket y adjuntamos la imagen ");
    cy.wait(2000);
    cy.get('input[type=file]').selectFile('imagen (4).png');
    cy.wait(2000);
    cy.get('#btn-enviar_peticion').click();
    cy.wait(2000);
    cy.get('#validationTicket').click();
    cy.wait(2000);
    cy.get('#vista_solicitudesmai').click();
    cy.wait(2000);
    cy.get('.col-1').find('a').click();
    cy.wait(2000);
    cy.get('#area_peticion').select(2);
    cy.wait(2000);
    cy.get('#productoMai').select(5);
    cy.wait(2000);
    cy.get('#soporteMai').select(1);
    cy.wait(2000);
    cy.get('#p_descripcion').type("Creamos el ticket y adjuntamos la imagen ");
    cy.wait(2000);
    cy.get('input[type=file]').selectFile('imagen (8).png');
    cy.wait(2000);
    cy.get('#btn-enviar_peticion').click();
    cy.wait(2000);
  });
    after(() => {
    cy.log('Se finaliza la prueba');
  });
});