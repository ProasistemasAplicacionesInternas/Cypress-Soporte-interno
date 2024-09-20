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
    cy.get("#usuario").type('luis.mendez');
    cy.get("#clave").type('Helisa12*');
    cy.get("#ingresar").click();
    cy.wait(2500);
    validacionCodigoPage.token("luis.mendez");
  });


  it('prueba si3091Solicitud', () => {
    cy.get(':nth-child(1) > #dropdownMenuButton').click();
    cy.wait(1000);
    cy.get('#solicitudes_internasAdmin').click();
    cy.wait(1000);
    cy.get(':nth-child(1) > :nth-child(11) > form > .btn-primary').click();
    cy.wait(1000);


  });
});