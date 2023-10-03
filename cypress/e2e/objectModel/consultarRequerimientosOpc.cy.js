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
    cy.get(':nth-child(4) > #dropdownMenuButton').click();
    cy.wait(1000);
    cy.get('#consultarRequerimiento').click();
    cy.contains("Elija el criterio para la consulta").should("exist");
    cy.wait(1000);
  });

  it("Selección fecha", () => {
    cy.get('#criterio').select(1);
    cy.get('#fechaFiltro').type("01/10/2023 - 30/10/2023");
  });

  it("Selección petición", () => {
    cy.get('#criterio').select(2);
    cy.get('#peticionFiltro').type("1235");
  });

  it("Selección estado", () => {
    cy.get('#criterio').select(3);
    cy.wait(1000);
    cy.get('#estadoFiltro').select(3);
  });

  it("Selección Solicitante", () => {
    cy.get('#criterio').select(4);
    cy.wait(1000);
    cy.get('#usuarioFiltro').select(8);
  });

  afterEach("Finalización prueba", () => {
    cy.wait(1000);
    cy.log("Prueba finalizada");
});

});
