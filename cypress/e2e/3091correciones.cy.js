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


  it('prueba si3091CorrecionesConsulta', () => {
    cy.wait(1000);
    cy.get(':nth-child(4) > #dropdownMenuButton').click();
    cy.wait(1000);
    cy.get('#consultarPeticiones').click();
    cy.wait(1000);
    cy.get('#area').select(1);
    cy.wait(1000);
    cy.get('#criterio').select(1);
    cy.wait(1000);
    cy.get('#criterio').select(2);
    cy.wait(3000);
    cy.get(':nth-child(4) > #dropdownMenuButton').click();
    cy.wait(1000);
    cy.get('#consultarPeticiones').click();
    cy.wait(1000);
    cy.get('#area').select(2);
    cy.wait(1000);
    cy.get('#criterio').select(1);
    cy.wait(1000);
    cy.get('#criterio').select(2);
    cy.wait(1000);
    cy.get('#criterio').select(3);

  });
});