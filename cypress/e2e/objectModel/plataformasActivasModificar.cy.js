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

describe("Soporte Interno Plataformas", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  beforeEach("Login, token y plataformas", () => {
    loginSoporteInterno();
    cy.wait(1000);
    cy.contains('Plataformas').click();
    cy.contains('Plataformas Activas').click();
    cy.wait(1000);
  });

  it("Prueba mensaje error peticiones asignadas", () => {
    cy.get('label > input').type("1");
    cy.wait(1000);
    cy.get(':nth-child(1) > :nth-child(4) > #btn-modificar > span').click();
    cy.get('#modal_estado').select(1);
    cy.wait(1000);
    cy.get('#modificar_plataforma').click();
    cy.wait(2000);
  });

  it("Prueba mensaje error peticiones nuevas", () => {
    cy.get('label > input').type("19");
    cy.wait(1000);
    cy.get(':nth-child(1) > :nth-child(4) > #btn-modificar > span').click();
    cy.get('#modal_estado').select(1);
    cy.wait(1000);
    cy.get('#modificar_plataforma').click();
    cy.wait(2000);
  });

  it("Prueba mensaje error peticiones seleccionadas", () => {
    cy.get('label > input').type("236");
    cy.wait(1000);
    cy.get(':nth-child(1) > :nth-child(4) > #btn-modificar > span').click();
    cy.get('#modal_estado').select(1);
    cy.wait(1000);
    cy.get('#modificar_plataforma').click();
    cy.wait(2000);
  });

  it("Prueba mensaje error peticiones pendientes", () => {
    cy.get('label > input').type("234");
    cy.wait(1000);
    cy.get(':nth-child(1) > :nth-child(4) > #btn-modificar > span').click();
    cy.get('#modal_estado').select(1);
    cy.wait(1000);
    cy.get('#modificar_plataforma').click();
    cy.wait(2000);
  });

  afterEach("Finalización prueba", () => {
    cy.wait(1000);
    cy.log("Prueba finalizada");
  });
  
});
