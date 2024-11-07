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
      cy.get('#usuario').type('adm1');
      cy.get('#clave').type('Helisa123456789*');
      cy.get('#ingresar').click();
      cy.wait(2500);
      validacionCodigoPage.token("adm1");
    });
     
  after(() => {
    cy.wait(350);
    cy.log("Prueba exitosa");
    cy.wait(350);
  });
 
    it('visualización de iamgen SI_3248', () => {
      cy.get(':nth-child(1) > #dropdownMenuButton').click();
      cy.wait(2000);
      cy.get('#solicitudes_internasAdmin').click();
      cy.wait(2000);
      cy.get(':nth-child(7) > :nth-child(9) > form > .btn-primary').click();
      cy.wait(2000);
      cy.get('a > img').click();
      cy.wait(2000);

      });

      it('prueba SI_3235', () => {
        cy.get(':nth-child(2) > #dropdownMenuButton').click();
        cy.wait(2000);
        cy.get('#liberar_maiAdmin').click();
        cy.wait(2000);
        cy.get('#liberar3142').click();
        cy.wait(2000);
  
        cy.get(':nth-child(1) > #dropdownMenuButton').click();
        cy.wait(2000);
        cy.get('#solicitudes_internasAdmin').click();
        cy.wait(2000);
        cy.get(':nth-child(6) > :nth-child(9) > form > .btn-primary').click();
        cy.wait(2000);

        cy.get('embed[type="application/pdf"]').should('have.attr', 'src', '../../cartas/imagen6541730398879.pdf');
        cy.wait(2000);
        });
      
});