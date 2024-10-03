import LoginPage from "../pages/loginPage2";
import validacionCodigoPage from "../pages/validacionCodigoPage";
import validacionTokenPage from "../pages/validacionTokenPage";


const login = () => {

};

describe("Verificar Login", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  beforeEach(() => {
    cy.viewport(1600, 900)
    cy.visit("http://localhost/HelisaSoporteInterno/login.php");
    cy.wait(1000);
    cy.get('[value="Continuar"]').click();
    cy.get("#usuario").type('valentina.avila  ');
    cy.get("#clave").type('Helisa12345*');
    cy.get("#ingresar").click();
    cy.wait(2500);
    cy.get('#alerta').click();
    cy.wait(2500);
    cy.get('#clave').type('H');
    cy.wait(2500);
    cy.get('#clave').type('elisa123*');
    cy.wait(2500);
    cy.get('#confirma').type('Helisa123*');
    cy.wait(2500);
    cy.get('#enviar').click();
    cy.wait(2500);
    cy.visit("http://localhost/HelisaSoporteInterno/login.php");
    cy.wait(2500);
    cy.get('#alerta').click(); 
    cy.wait(2500);
    cy.get("#usuario").type('valentina.avila  ');
    cy.get("#clave").type('Helisa123*');
    cy.get("#ingresar").click();
    validacionTokenPage.token("valentina.avila");

  });

  it(' C_2663', () => {

    

  });
});