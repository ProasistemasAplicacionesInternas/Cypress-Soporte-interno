import LoginPage from "../../pages/loginPage2";
import validacionCodigoPage from "../../pages/validacionCodigoPage";


const login = () => {
  cy.viewport(1280, 720)
  cy.visit("http://localhost/infraestructura2/login.php");
  cy.wait(1000);
  LoginPage.login("administrador");
  cy.wait(1000);
  cy.wait(1000);
  validacionCodigoPage.token("administrador");
};

describe("Verificar Login", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
    beforeEach(() => {
      login();
    });
    it('opcion izquierda', () => {
      cy.wait(2000); //inactivar funcionario 
      cy.get(':nth-child(5) > #dropdownMenuButton').click();
      cy.get('#funcionarios').click();
      cy.wait(2000);
      cy.get(':nth-child(9) > :nth-child(8) > form > .btn').click();
      cy.wait(2000);
      cy.get('#f_estado').select('Inactivo');
      cy.wait(2000);
      cy.get('#f_fecha_inactivacion').type("2024-05-15");
      cy.wait(2000);
      cy.get('#descripcionRetiro').type("Va a salir un alert impidiendo la acción hasta que el funcionario acepte lo que tiene pendiente");
      cy.wait(2000);
      cy.get('#btn-guardarModif').click();
      cy.wait(2000);
      cy.get('#cerrar_modificacion').click(); //Fin de inactivar Funcionario 
      cy.wait(2000);     
      cy.get('#activos').click();
      cy.wait(2000);
      cy.get('#criterio').select(1);
      cy.wait(2000);
      cy.get('#codigoActivo').type("111111111");
      cy.wait(2000);
      cy.get('#btn-consultarCodigo').click();
      cy.wait(2000);
      cy.get('#formTraslados_2390 > .btn').click();
      cy.wait(2000);
    });
      after(() => {
      cy.log('Se finaliza la prueba');
    });
  });

