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
    cy.get('#control_actividades').click(); 
    cy.wait(1000);
    cy.contains("Elija el criterio para la consulta de Actividades Activos Fijos").should("exist");
  });

  it("opción por codigo activo", () => {
    cy.get('#criterio').select(1);
    cy.get('#codigoActivo').type("1234");
  });

  it("opción por nombre activo", () => {
    cy.get('#criterio').select(2);
    cy.get('#nombreActivo').type("1234");
  });

  it("opción por responsabilidad", () => {
    cy.get('#criterio').select(3);
    cy.get('#responsable').type("Jhon");
  });

  afterEach("Finalización prueba", () => {
    cy.wait(1000);
    cy.log("Prueba finalizada");
});
});
