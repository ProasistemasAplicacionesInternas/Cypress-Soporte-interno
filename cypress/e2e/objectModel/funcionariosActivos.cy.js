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
  });

  it("Funcionarios Activos", () => {
    cy.get(':nth-child(5) > #dropdownMenuButton').click();
    cy.wait(1000);
    cy.get('#funcionarios > .ml-3').click();
    cy.contains("Consulta Funcionarios").should("exist");
  });

  afterEach("Finalización prueba", () => {
    cy.wait(1000);
    cy.log("Prueba finalizada");
});
});
