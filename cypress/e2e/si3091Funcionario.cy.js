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
  it('prueba si3091Funcionario.cy.js', () => {

    cy.get('#validationTicket').click();
    cy.wait(2000);
    cy.get('#generar_solicitud').click();
    cy.wait(2000);
    cy.get('.col-1').click();
    cy.wait(2000);
    cy.get('#area_peticion').select(1);
    cy.wait(2000);
    cy.get('#p_categoria').select(3);
    cy.wait(2000);
    cy.get('#p_descripcion').type('pruebaCypressInfraestructura');
    cy.wait(2000);
    cy.get('input[name="imagen[]"]').should('be.visible');
    cy.wait(2000);
    cy.get('input[name="imagen[]"]').attachFile('pruebasubir.pdf');
    cy.wait(2000);
    cy.get('#btn-enviar_peticion').click();
    cy.wait(2000);
    cy.get('#validationTicket').click();
    cy.wait(2000);
    cy.get('#vista_solicitudesmai').click();
    cy.wait(2000);
    cy.get('h8').click();
    cy.wait(2000);
    cy.get('#area_peticion').select(2);
    cy.wait(2000);
    cy.get('#productoMai').select(5);
    cy.wait(2000);
    cy.get('#soporteMai').select(2);
    cy.wait(2000);
    cy.get('#p_descripcion').type('pruebaCypressAppsInterna')
    cy.wait(2000);
    cy.get('input[name="imagen[]"]').should('be.visible');
    cy.wait(2000);
    cy.get('input[name="imagen[]"]').attachFile('pruebasubir.pdf');
    cy.wait(2000);
    cy.get('#btn-enviar_peticion').click();
    cy.wait(2000);


    

 






  });
});