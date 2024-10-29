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
    it('prueba SI_3235', () => {
      cy.get('#requerimientos').click();
      cy.wait(2000);
      cy.get(':nth-child(1) > [style="background-color:white;"] > form > .btn-primary').click();
      cy.wait(2000);
      cy.get('#p_estado').select(9);
      cy.wait(2000);
      cy.get('#p_conclusiones').type('Backlog');
      cy.wait(2000);
      cy.get('#aceptar_petmai').click();
      cy.wait(2000);
      cy.get('#requerimientos').click();
      cy.wait(2000);

      cy.get(':nth-child(4) > #dropdownMenuButton').click();
      cy.wait(2000);
      cy.get('#consultarRequerimiento').click();
      cy.wait(2000);
      cy.get('#criterio').select(3);
      cy.wait(2000);
      cy.get('#estadoFiltro').select(8);
      cy.wait(2000);
      cy.get('#btn-consultarEstado').click();
      cy.wait(2000);
      cy.get('a > img').click();
      cy.wait(2000);
      cy.get('#requerimientos').click();
      cy.wait(2000);


      cy.get(':nth-child(1) > [style="background-color:white;"] > form > .btn-primary').click();
      cy.wait(2000);
      cy.get('#p_estado').select(5);
      cy.wait(2000);
      cy.get('#p_conclusiones').type('En Pruebas Test');
      cy.wait(2000);
      cy.get('#aceptar_petmai').click();
      cy.wait(2000);
      cy.get('#requerimientos').click();
      cy.wait(2000);

      cy.get(':nth-child(4) > #dropdownMenuButton').click();
      cy.wait(2000);
      cy.get('#consultarRequerimiento').click();
      cy.wait(2000);
      cy.get('#criterio').select(3);
      cy.wait(2000);
      cy.get('#estadoFiltro').select(11);
      cy.wait(2000);
      cy.get('#btn-consultarEstado').click();
      cy.wait(2000);
      cy.get('a > img').click();
      cy.wait(2000);
      cy.get('#requerimientos').click();
      cy.wait(2000);


      cy.get(':nth-child(1) > [style="background-color:white;"] > form > .btn-primary').click();
      cy.wait(2000);
      cy.get('#p_estado').select(10);
      cy.wait(2000);
      cy.get('#p_conclusiones').type('En Producción');
      cy.wait(2000);
      cy.get('#aceptar_petmai').click();
      cy.wait(2000);
      cy.get('#requerimientos').click();
      cy.wait(2000);

      cy.get(':nth-child(4) > #dropdownMenuButton').click();
      cy.wait(2000);
      cy.get('#consultarRequerimiento').click();
      cy.wait(2000);
      cy.get('#criterio').select(3);
      cy.wait(2000);
      cy.get('#estadoFiltro').select(9);
      cy.wait(2000);
      cy.get('#btn-consultarEstado').click();
      cy.wait(2000);
      cy.get('a > img').click();
      cy.wait(2000);
      cy.get('#requerimientos').click();
      cy.wait(2000);


      cy.get(':nth-child(1) > [style="background-color:white;"] > form > .btn-primary').click();
      cy.wait(2000);
      cy.get('#p_estado').select(11);
      cy.wait(2000);
      cy.get('#p_conclusiones').type('Descartado');
      cy.wait(2000);
      cy.get('#aceptar_petmai').click();
      cy.wait(2000);
      cy.get('#requerimientos').click();


      cy.get(':nth-child(4) > #dropdownMenuButton').click();
      cy.wait(2000);
      cy.get('#consultarRequerimiento').click();
      cy.wait(2000);
      cy.get('#criterio').select(3);
      cy.wait(2000);
      cy.get('#estadoFiltro').select(10);
      cy.wait(2000);
      cy.get('#btn-consultarEstado').click();
      cy.wait(2000);
      cy.get('a > img').click();
      cy.wait(2000);
      cy.get('#requerimientos').click();
      cy.wait(2000);


    });
    
});
