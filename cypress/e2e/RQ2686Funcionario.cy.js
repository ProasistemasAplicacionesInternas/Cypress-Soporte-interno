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
    cy.visit("http://localhost/HelisaSoporteInterno/login_peticiones.php");
    cy.wait(1000);
    cy.get('[value="Continuar"]').click();
    cy.get("#f_user").type('luis.mendez');
    cy.get("#f_password").type('Lm123456789**');
    cy.get("#ingresar").click();
    cy.wait(2500);
    validacionTokenPage.token("luis.mendez");
  });
  it('prueba RQ_2686_funcionario', () => {
    cy.wait(3000);
    cy.get('#validationTicket').click();
    cy.wait(3000);
    cy.get('#vista_solicitudsg').click();
    cy.wait(3000);
    cy.get('.col-1').click();
    cy.wait(3000);
    cy.get('#caSeguridad')
    cy.wait(3000);
    cy.get('#caSeguridad').select(2);
    cy.wait(3000);
    cy.get('#p_descripcion').type('PruebaCreacionRq_2686');
    cy.wait(3000);
    cy.get('#btn-enviar_peticionSg').click();
    cy.wait(3000);
    cy.get('#validationTicket').click();
    cy.wait(3000);
    cy.get('#vista_solicitudsg').click();
    cy.wait(3000);
    cy.get(':nth-child(7) > :nth-child(9) > form > .btn').click();
    cy.wait(3000);
    cy.get(':nth-child(2) > .btn').click();
    cy.wait(3000);
    cy.get('.close > span').click();
    cy.wait(3000);
    cy.get('#p_conclusiones').type('PruebaCypress1');
    cy.wait(3000);
    cy.get('#btn-reenviar_peticionsg').click();
    cy.wait(3000);
    cy.get('#validationTicket').click();
    cy.wait(3000);
    cy.get('#vista_solicitudsg').click();
    cy.wait(3000);
    cy.get('#revisar13').click();
  });

});