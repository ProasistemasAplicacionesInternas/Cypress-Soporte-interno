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
      cy.get('#requerimientos').click();
      cy.wait(5000);
      cy.get(':nth-child(1) > [style="background-color:white;"] > form > .btn-primary').click();
      cy.wait(3000);
      cy.get('#p_estado').select(2);
      cy.wait(2000);
      cy.get('#p_conclusiones').type('PruebasCypress1');
      cy.get('#aceptar_petmai').click();
      cy.wait(2000);
      cy.get('#requerimientos').click();
      cy.wait(5000);
      cy.get(':nth-child(1) > [style="background-color:white;"] > form > .btn-primary').click();
      cy.wait(3000);
      cy.get('#p_estado').select(3);
      cy.wait(2000);
      cy.get('#p_conclusiones').type('PruebasCypress2');
      cy.get('#aceptar_petmai').click();
      cy.wait(2000);
      cy.get('#requerimientos').click();
      cy.wait(5000);
      cy.get(':nth-child(1) > [style="background-color:white;"] > form > .btn-primary').click();
      cy.wait(3000);
      cy.get('#p_estado').select(4);
      cy.wait(2000);
      cy.get('#p_conclusiones').type('PruebasCypress3');
      cy.get('#aceptar_petmai').click();
      cy.wait(2000);
      cy.get('#requerimientos').click();
      cy.wait(5000);
      cy.get(':nth-child(1) > [style="background-color:white;"] > form > .btn-primary').click();
      cy.wait(3000);
      cy.get('#p_estado').select(5);
      cy.wait(2000);
      cy.get('#p_conclusiones').type('PruebasCypress4');
      cy.get('#aceptar_petmai').click();
      cy.wait(2000);
      cy.get('#requerimientos').click();
      cy.wait(5000);
    });
    
});
