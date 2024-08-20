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
      cy.get("#clave").type('Lm123456789**');
      cy.get("#ingresar").click();
      cy.wait(2500);
      validacionCodigoPage.token("luis.mendez");
    });
    it('prueba RQ_2671', () => {
        cy.get(':nth-child(4) > #dropdownMenuButton').click();
        cy.wait(2000);
        cy.get('#consultarRequerimiento').click();
        cy.wait(1000);
        cy.get('#criterio').select(3);
        cy.wait(2000);
        cy.get('#estadoFiltro').select(2);
        cy.wait(2000);
        cy.get('#btn-consultarEstado').click();
        cy.wait(3000);
        cy.get('a > img').click();
        cy.wait(1000);
        cy.get(':nth-child(4) > #dropdownMenuButton').click();
        cy.wait(2000);
        cy.get('#consultarRequerimiento').click();
        cy.wait(1000);
        cy.get('#criterio').select(3);
        cy.wait(2000);
        cy.get('#estadoFiltro').select(3);
        cy.wait(2000);
        cy.get('#btn-consultarEstado').click();
        cy.wait(3000);
        cy.get('a > img').click();
        cy.wait(1000);
        cy.get(':nth-child(4) > #dropdownMenuButton').click();
        cy.wait(2000);
        cy.get('#consultarRequerimiento').click();
        cy.wait(1000);
        cy.get('#criterio').select(3);
        cy.wait(2000);
        cy.get('#estadoFiltro').select(4);
        cy.wait(2000);
        cy.get('#btn-consultarEstado').click();
        cy.wait(3000);
        cy.get('a > img').click();
        cy.wait(1000);
        cy.get(':nth-child(4) > #dropdownMenuButton').click();
        cy.wait(2000);
        cy.get('#consultarRequerimiento').click();
        cy.wait(1000);
        cy.get('#criterio').select(3);
        cy.wait(2000);
        cy.get('#estadoFiltro').select(5);
        cy.wait(2000);
        cy.get('#btn-consultarEstado').click();
        cy.wait(3000);
        cy.get('a > img').click();
        cy.wait(1000);

        




    });
    
});