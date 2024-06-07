import LoginPage from "../../pages/loginPage2";
import validacionCodigoPage from "../../pages/validacionCodigoPage";


const login = () => {
  cy.viewport(1280, 720)
  cy.visit("http://localhost/infraestructura1/login.php");
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
      cy.get(':nth-child(10) > :nth-child(8) > form > .btn').click();
      cy.wait(2000);
      cy.get('#f_estado').select('Inactivo');
      cy.wait(2000);
      cy.get('#f_fecha_inactivacion').type("2024-06-07");
      cy.wait(2000);
      cy.get('#funcionario_translado').select(6);
      cy.wait(2000);
      cy.get('#descripcionRetiro').type("Aqui seleccionamos a que funcionarios le van a quedar los activos");
      cy.wait(2000);
      cy.get('#btn-guardarModif').click();//Fin de inactivar Funcionario 
      cy.wait(2000);
      cy.get(':nth-child(5) > #dropdownMenuButton').click();
      cy.wait(2000);
      cy.get('#funcionarios').click();
      cy.wait(2000);
      cy.get(':nth-child(1) > :nth-child(8) > form > .btn').click();
      cy.wait(2000);
      cy.get('#f_estado').select('Inactivo');
      cy.wait(2000);
      cy.get('#descripcionRetiro').type("Aqui podemos ver que los activos si se pasaron");
      cy.wait(2000);
    });
      after(() => {
      cy.log('Se finaliza la prueba');
    });
  });

