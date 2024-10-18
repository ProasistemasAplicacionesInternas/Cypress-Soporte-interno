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
    cy.viewport(1280, 720)
    cy.wait(3000);
    cy.visit("http://localhost/HelisaSoporteInterno/login.php");
    cy.wait(3000);
    cy.get('[value="Continuar"]').click();
    cy.wait(1000);
    cy.get("#usuario").type('valentina.avila');
    cy.wait(1000);
    cy.get("#clave").type('Helisa123*');
    cy.wait(1000);
    cy.get("#ingresar").click();
    cy.wait(1000);
    validacionTokenPage.token("valentina.avila");
    cy.wait(1000);
    cy.get(':nth-child(10) > #dropdownMenuButton').click();
    cy.wait(1000);
    cy.get('#usuarios').click();
    cy.wait(1000);
    cy.get(':nth-child(1) > :nth-child(8) > #btn-borrarQr').click();
    cy.wait(3000);
    cy.get(':nth-child(2) > :nth-child(8) > #btn-borrarQr').click();
    cy.wait(3000);
    cy.get(':nth-child(4) > :nth-child(8) > #btn-borrarQr').click();



  });

  it(' SI_3174', () => {

    

  });
});