import loginPage from "../../pages/loginPage";
import validacionCodigoPage from "../../pages/validacionCodigoPage";

const test = require("../../fixtures/data-driven/login.json");

function loginSoporteInterno() {
    cy.visit("http://localhost/HelisaSoporteInterno/login.php");
    loginPage.Alert();
    cy.wait(1000);
    loginPage.typeUsername("usuario.coordinadormai");
    loginPage.typePassword(test[0].password);
    cy.wait(1000);
    loginPage.clickLogin();
    validacionCodigoPage.validarText();
    validacionCodigoPage.token("usuario.coordinadormai");
    cy.wait(1000);
}

describe("Soporte Interno Consultar ISO", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  beforeEach("Login, token y plataformas", () => {
    loginSoporteInterno();
    cy.wait(1000);

  });

  it("Seleccionar consulta fecha", () => {
    cy.contains('Consultas').click();
    cy.wait(1000);
    cy.contains('Consultas-ISO').click();
    cy.wait(1000);
    cy.get('#criterio').select(1);
    cy.wait(1000);
    cy.get('#fechaFiltro').clear(); 
    cy.get('#fechaFiltro').type("25/09/2023 - 28/09/2023");
    cy.wait(1000);
    cy.get('.applyBtn').click();
    cy.get('#btn-consultarFechaI').parent().as("padreButonFecha");
    cy.get("@padreButonFecha").invoke('removeAttr', 'target');
    cy.wait(1000);
    cy.get('#btn-consultarFechaI').click();
    cy.get('.even > :nth-child(10) > #btn-crearComentario').click();
    cy.wait(1000);
    cy.get('#comentario').type("Comentario generado con Cypress video 1 - fecha");
    cy.get('#btn-comentar').click();
    cy.wait(1000);
    cy.get('.even > :nth-child(11) > #btn-verComentarios').click();
    cy.wait(3000);
    cy.get('#verComentarios > .modal-dialog > .modal-content > .modal-header > .close > span').click();
    cy.wait(1000);
    cy.get('.dt-button > span').click()
    cy.wait(3000);
    cy.get('.odd > :nth-child(9) > #imagen > #imagenPetFinal').parent().as("aPadre");
    cy.get("@aPadre").invoke('removeAttr', 'target');
    cy.wait(1000);
    cy.get('.odd > :nth-child(9) > #imagen > #imagenPetFinal').click(); 
  });

  it("Seleccionar consulta N°", () => {
    cy.contains('Consultas').click();
    cy.wait(1000);
    cy.contains('Consultas-ISO').click();
    cy.wait(1000);
    cy.get('#criterio').select(2);
    cy.wait(1000);
    cy.get('#peticionFiltro').clear(); 
    cy.get('#peticionFiltro').type("15435");
    cy.wait(1000);
    cy.get('#btn-consultarTicketI').parent().as("padreButonNit");
    cy.get("@padreButonNit").invoke('removeAttr', 'target');
    cy.wait(1000);
    cy.get('#btn-consultarTicketI').click();
    cy.get('#btn-crearComentario').click();
    cy.wait(1000);
    cy.get('#comentario').type("Comentario generado con Cypress video 1  - N°");
    cy.get('#btn-comentar').click();
    cy.wait(1000);
    cy.get('#btn-verComentarios').click();
    cy.wait(3000);
    cy.get('#verComentarios > .modal-dialog > .modal-content > .modal-header > .close > span').click();
    cy.wait(1000);
    cy.get('.dt-button > span').click()
    cy.wait(3000);
    cy.get('#imagenPetFinal').parent().as("aPadre");
    cy.get("@aPadre").invoke('removeAttr', 'target');
    cy.wait(1000);
    cy.get('#imagenPetFinal').click();
  });

  afterEach("Finalización prueba", () => {
    cy.wait(1000);
    cy.log("Prueba finalizada");
  });
  
});
