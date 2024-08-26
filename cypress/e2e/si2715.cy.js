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


  it('prueba SI_2715', () => {

    cy.get(':nth-child(4) > #dropdownMenuButton').click();
    cy.wait(2000);
    cy.get('#consultarPeticiones').click();
    cy.wait(1000);
    cy.get('#area').select(2);
    cy.wait(2000);
    cy.get('#criterio').select(1);
    cy.wait(2000);
    cy.get('#fechaFiltro').click();
    cy.wait(2000);
    cy.get('.prev').click();
    cy.wait(1000);
    cy.get('.prev').click();
    cy.wait(1000);
    cy.get('.prev').click();
    cy.wait(1000);
    cy.get('.prev').click();
    cy.wait(1000);
    cy.get('.left > .calendar-table > .table-condensed > tbody > :nth-child(2) > [data-title="r1c0"]').click();
    cy.wait(2000);
    cy.get('.right > .calendar-table > .table-condensed > tbody > :nth-child(5) > [data-title="r4c4"]').click();
    cy.wait(2000);
    cy.get('.applyBtn').click();
    cy.wait(2000);
    cy.get('#btn-consultarFecha').click();
    cy.wait(2000);
    cy.get('#tabla_next').click();
    cy.wait(1000);
    cy.get('#tabla_next').click();
    cy.wait(1000);
    cy.get('label > input').type('requerimientos');
    cy.wait(1000);
    cy.get('a > img').click();
    cy.wait(1000);
    cy.get(':nth-child(4) > #dropdownMenuButton').click();
    cy.wait(2000);
    cy.get('#consultarPeticiones').click();
    cy.wait(1000);
    cy.get('#area').select(2);
    cy.wait(1000);
    cy.get('#criterio').select(2);
    cy.wait(1000);
    cy.get('#peticionFiltro').type('5');
    cy.wait(1000);
    cy.get('#btn-consultarTicket').click();
    cy.wait(1000);
    cy.get('a > img').click();
    cy.wait(1000);
    cy.get(':nth-child(4) > #dropdownMenuButton').click();
    cy.wait(1000);
    cy.get('#consultarPeticiones').click();
    cy.wait(1000);
    cy.get('#area').select(2);
    cy.wait(1000);
    cy.get('#criterio').select(3);
    cy.wait(1000);
    cy.get('#programadorFiltro').select(1);
    cy.wait(1000);
    cy.get('#btn-consultarProgramador').click();
    cy.wait(3000);
    cy.get('label > input').type('requerimientos');
    cy.wait(3000);
    cy.get('a > img').click();
    cy.wait(3000);
  });

});

