import LoginPage from "../../pages/loginPage2";
import validacionCodigoPage from "../../pages/validacionCodigoPage";
import validacionTokenPage from "../../pages/validacionTokenPage";

const login = () => {
  cy.viewport(1280, 720)
  cy.visit("http://localhost/HelisaSoporteInterno/login.php");
  cy.wait(1000);
  LoginPage.login("coordInfra3");
  cy.wait(1000);
  validacionTokenPage.token("coordInfra3");
};
describe("Nuevas vistas cordinador", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    login();
  });

  after(() => {
    cy.wait(350);
    cy.log("Prueba exitosa");
    cy.wait(350);
  });

  it('Comentarios-ISO - Seleccionar rango de fechas', () => {
    cy.wait(1500);
    cy.get(':nth-child(5) > #dropdownMenuButton').click();
    cy.wait(1500);
    cy.get('#comentariosPeticiones').click();
    cy.wait(1500);
    cy.get('#criterio').select(1);
    cy.wait(1500);
    cy.get('#fechaFiltro').click();
    cy.wait(1500);
    for (let i = 0; i < 9; i++) {
      cy.get('.prev').click();
    }
    cy.get('.left > .calendar-table > .table-condensed > tbody > :nth-child(2) > [data-title="r1c0"]').click();
    cy.wait(1500);
    for (let i = 0; i < 8; i++) {
      cy.get('.next').click();
    }
    cy.wait(1500);
    cy.get('.right > .calendar-table > .table-condensed > tbody > :nth-child(4) > [data-title="r3c4"]').click();
    cy.wait(1500);
    cy.get('.applyBtn').click();
    cy.wait(1500);
    cy.get('#btn-consultarFecha').click();
  });

  it('Funcionarios - Funcionarios retirados', () => {
    cy.wait(1500);
    cy.get(':nth-child(6) > #dropdownMenuButton').click();
    cy.wait(1500);
    cy.get('#funcionarios_Retirados').click();
    cy.wait(1500);
    cy.get(':nth-child(1) > :nth-child(10) > form > .btn').click();
    cy.wait(1500);
    cy.get('#modificar_funcionarioInactivo').click();
  });

  it('Registros - Funcionarios retirados', () => {
    cy.wait(1500);
    cy.get(':nth-child(12) > #dropdownMenuButton').click();
    cy.wait(1500);
    cy.get('#accesos-funcionarios').click();
    cy.wait(1500);
    cy.get('#criterio').select(2);
    cy.wait(1500);
    cy.get('#usuarioFiltro').select(6);
    cy.wait(1500);
    cy.get('#btn-consultarUsuario').click();
    cy.wait(1500);
  });
});