import loginPage from "../../pages/loginPage";
import validacionCodigoPage from "../../pages/validacionCodigoPage";

const test = require("../../fixtures/data-driven/login.json");

const login = () => {
  cy.visit("http://localhost/HelisaSoporteInterno/login.php");
  loginPage.Alert();
  loginPage.typeUsername("usuario.coordinadormai");
  loginPage.typePassword(test[0].password);
  loginPage.clickLogin();
};
function visitaPagina(){
  cy.visit("www.google.com");
}
describe("Login", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  beforeEach(() => {
    visitaPagina();
    /*
    login();
    validacionCodigoPage.validarText();
    validacionCodigoPage.token("usuario.coordinadormai");
    cy.contains('Plataformas').click();*/
  })
  afterEach(() => {
    cy.log("Prueba correctamente");
  })
  it("Asersion text", () => {
    cy.get(".RNmpXc").should("exist");
  });

  it("asersion contain", () => {
    cy.contains("Acceder").should("contain", "Acceder");
  });

  it("asersion visible", () => {
    cy.contains("Acceder").should("be.visible");
  });

  it("asersion disabled", () => {
    cy.contains("Acceder").should("be.disabled");
  }); https://www.google.com/?gws_rd=ssl

  it.only("asersion eq", () => {
    cy.url().should("eq","https://www.google.com/?gws_rd=ssl");
  }); 

});
