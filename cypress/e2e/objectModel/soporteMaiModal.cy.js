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

describe("Soporte Interno ", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  beforeEach("Login y token", () => {
    loginSoporteInterno();
    cy.wait(1000);
    cy.contains('Soportes').click();
    cy.contains('Aplicaciones').click();
    cy.wait(1000); 
    cy.contains('Solicitudes Internas').should('exist');
  });

 it("Realizar un soporte", () => {
    cy.get(':nth-child(1) > :nth-child(11) > form > .btn-primary').parent().invoke('removeAttr', 'target');
    cy.wait(1000);
    cy.get(':nth-child(1) > :nth-child(11) > form > .btn-primary').click();
    cy.wait(1000);
    cy.get('#p_estado').select(2);
    cy.wait(1000);
    cy.get('#p_conclusiones').focus();
    cy.get('#p_conclusiones').type("Pendiente");
    cy.wait(1000);
    cy.get('#aceptar_petmai').parent().invoke('removeAttr', 'target');
    cy.get('#aceptar_petmai').click();
 });

  afterEach("Finalización prueba", () => {
    cy.wait(1000);
    cy.log("Prueba finalizada");
  });
  
});
