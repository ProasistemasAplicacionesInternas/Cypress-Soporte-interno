import LoginPage from "../../pages/loginPage2";
import validacionCodigoPage from "../../pages/validacionCodigoPage";
import validacionTokenPage from "../../pages/validacionTokenPage";


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
  it('prueba RQ_2686', () => {
/*     cy.wait(3000);
    cy.get(':nth-child(2) > #dropdownMenuButton').click();
    cy.wait(3000);
    cy.get('#solicitudesSeguridad').click();
    cy.wait(3000);
    cy.get(':nth-child(2) > :nth-child(8) > form > #seleccionar').click();
    cy.wait(3000);
    cy.get('#p_estado').select(2);
    cy.wait(3000);
    cy.get('#p_conclusiones').type('pruebaCypress');
    cy.wait(3000);
    cy.get('.ml-3 > .btn').click();
    cy.wait(3000);
    cy.get('.close > span').click();
    cy.wait(3000);
    cy.get('#aceptar').click();
    cy.wait(3000);
    cy.get(':nth-child(2) > #dropdownMenuButton').click();
    cy.wait(3000);
    cy.get('#solicitudesSeguridad').click();
    cy.wait(3000);
    cy.get(':nth-child(2) > :nth-child(8) > form > #seleccionar').click();
    cy.wait(3000);
    cy.get('#p_estado').select(3);
    cy.wait(3000);
    cy.get('#p_conclusiones').type('estadoEnProcesoC');
    cy.wait(3000);
    cy.get('#aceptar').click();
    cy.wait(3000);
    cy.get(':nth-child(2) > #dropdownMenuButton').click();
    cy.wait(3000);
    cy.get('#solicitudesSeguridad').click();
    cy.wait(3000);
    cy.get(':nth-child(2) > :nth-child(8) > form > #seleccionar').click();
    cy.wait(3000);
    cy.get('#p_estado').select(1);
    cy.wait(3000);
    cy.get('#p_conclusiones').type('pruebaResuelto');
    cy.wait(3000);
    cy.get('#aceptar').click();
    cy.wait(3000);
    cy.get(':nth-child(2) > #dropdownMenuButton').click();
    cy.wait(3000);
    cy.get('#solicitudesSeguridad').click();
    cy.wait(3000); */



    cy.get(':nth-child(4) > #dropdownMenuButton').click();
    cy.wait(3000);
    cy.get('#ConsultarSeguridad').click();
    cy.wait(3000);
    cy.get('#criterioSg').select(1);
    cy.wait(3000);
    cy.get('#estadoFiltroCategoria').select(2);
    cy.wait(3000);
    cy.get('#btn-consultarCategoria').click();
    cy.wait(3000);
    cy.get('#btn-verConclusion').click();
    cy.wait(3000);
    cy.get('#verConclusionSg > .modal-dialog > .modal-content > .modal-header > .close > span').click();
    cy.wait(3000);
    cy.get('#btn-traerImagenes').click();
    cy.wait(3000);
    cy.get('#documentModal > .modal-dialog > .modal-content > .modal-header > .close > span').click();
    cy.wait(3000);
    cy.get('a > img').click();
    cy.wait(3000);
    cy.get(':nth-child(4) > #dropdownMenuButton').click();
    cy.wait(3000);
    cy.get('#ConsultarSeguridad').click();
    cy.wait(3000);
    cy.get('#criterioSg').select(2);
    cy.wait(3000);
    cy.get('#estadoFiltroEs').select(1);
    cy.wait(3000);
    cy.get('#btn-consultarEstado').click();
    cy.wait(3000);
    cy.get('#btn-verConclusion').click();
    cy.wait(3000);
    cy.get('#verConclusionSg > .modal-dialog > .modal-content > .modal-header > .close > span').click();
    cy.wait(3000);
    cy.get('#btn-traerImagenes').click();
    cy.wait(3000);
    cy.get('#documentModal > .modal-dialog > .modal-content > .modal-header > .close > span').click();
    cy.get('a > img').click();
    cy.wait(3000);
    cy.get(':nth-child(4) > #dropdownMenuButton').click();
    cy.wait(3000);
    cy.get('#ConsultarSeguridad').click();
    cy.wait(3000);
    cy.get('#criterioSg').select(2);
    cy.wait(3000);
    cy.get('#estadoFiltroEs').select(2);
    cy.wait(3000);
    cy.get('#btn-consultarEstado').click();
    cy.wait(3000);
    cy.get('#btn-verConclusion').click();
    cy.wait(3000);
    cy.get('#verConclusionSg > .modal-dialog > .modal-content > .modal-header > .close > span').click();
    cy.wait(3000);
    cy.get('#btn-traerImagenes').click();
    cy.wait(3000);
    cy.get('#documentModal > .modal-dialog > .modal-content > .modal-header > .close > span').click();
    cy.get('a > img').click();
    cy.wait(3000);
    cy.get(':nth-child(4) > #dropdownMenuButton').click();
    cy.wait(3000);
    cy.get('#ConsultarSeguridad').click();
    cy.wait(3000);
    cy.get('#criterioSg').select(2);
    cy.wait(3000);
    cy.get('#estadoFiltroEs').select(3);
    cy.wait(3000);
    cy.get('#btn-consultarEstado').click();
    cy.wait(3000);
    cy.get('#btn-verConclusion').click();
    cy.wait(3000);
    cy.get('#verConclusionSg > .modal-dialog > .modal-content > .modal-header > .close > span').click();
    cy.wait(3000);
    cy.get('#btn-traerImagenes').click();
    cy.wait(3000);
    cy.get('#documentModal > .modal-dialog > .modal-content > .modal-header > .close > span').click();
    cy.get('a > img').click();
    cy.wait(3000);
    cy.get(':nth-child(4) > #dropdownMenuButton').click();
    cy.wait(3000);
    cy.get('#ConsultarSeguridad').click();
    cy.wait(3000);
    cy.get('#criterioSg').select(3);
    cy.wait(3000);
    cy.get('#peticionFiltro').type('13');
    cy.wait(3000);
    cy.get('#btn-consultarTicketI').click();

  });

});