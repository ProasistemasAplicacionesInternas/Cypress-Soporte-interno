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

describe("Soporte Interno", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  beforeEach("Login y token", () => {
    loginSoporteInterno();
    cy.wait(1000);
  });

  it("Ingreso liberar soporte", () => {
    cy.contains("Liberar Soporte").click();
    cy.get('#liberar_maiAdmin').click();
    cy.wait(1000);
    cy.contains("Liberar Soporte Interno").should("exist");
  });

  afterEach("Finalización prueba", () => {
    cy.wait(1000);
    cy.log("Prueba finalizada");
});
});
