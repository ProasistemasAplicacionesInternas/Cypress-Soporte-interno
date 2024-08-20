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
      validacionTokenPage.token("luis.mendez");
    });
    it('prueba RQ_2672', () => {
        cy.get('#requerimientos').click();
        cy.wait(3000);
        cy.get('.current').click();
        cy.wait(2000);
        cy.get('[data-dt-idx="2"]').click();
        cy.wait(2000);
        cy.get('#tabla_next').click();
        cy.wait(2000);
        cy.get('#tabla_previous').click();
        cy.wait(2000);
        cy.get('#total > .boton-imagen > img').click();
        cy.wait(2000);
        cy.get('.modal-footer > .btn').click();
        cy.wait(1000);
        cy.get('#actualizar > .boton-imagen > img').click();
        cy.wait(3000);
        cy.get('label > input').type('jefferson.correa');
        cy.wait(3000);
        cy.get('label > input').clear();
        cy.wait(2000);
        cy.get('label > input').type('maria');
        cy.wait(2000);
        cy.get('label > input').clear();
        cy.wait(2000);
        cy.get('label > input').type('daniel.rojas');
        cy.wait(2000);
        cy.get('#actualizar > .boton-imagen > img').click();
        cy.wait(2000);
        cy.get('[aria-label="Usuario: activate to sort column ascending"]').click();
        cy.wait(2000);
        cy.get('[aria-label="Fecha solicitud: activate to sort column ascending"]').click();
        cy.wait(2000);
        cy.get('#actualizar > .boton-imagen > img').click();
        cy.wait(3000);

    });
    
});