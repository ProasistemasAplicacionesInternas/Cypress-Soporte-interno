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


  it('prueba si3091Solicitud', () => {
    cy.get(':nth-child(1) > #dropdownMenuButton').click();
    cy.wait(1000);
    cy.get('#solicitudes_internasAdmin').click();
    cy.wait(1000);
    cy.get(':nth-child(1) > :nth-child(9) > form > .btn-primary').click();
    cy.wait(1000);
    cy.get('#p_estado').select(1);
    cy.wait(1000);
    cy.get('#p_conclusiones').type('pruebaresueltoNOIMAGENcypress');
    cy.wait(2000);
    cy.get('#aceptar_petmai').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > #dropdownMenuButton').click();
    cy.wait(2000);
    cy.get('#solicitudes_infraestructuraAdmin').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(8) > form > #seleccionar').click();
    cy.wait(2000);
    cy.get('#p_estado').select(1);
    cy.wait(2000);
    cy.get('#p_cnclusiones').type('pruebaresueltoIMAGENinfra');
    cy.wait(2000);
    cy.get('input[name="imagen[]"]').should('be.visible');
    cy.wait(2000);
    cy.get('input[name="imagen[]"]').attachFile('pruebaresuelto.pdf');
    cy.wait(2000);
    cy.get('#aceptar').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > #dropdownMenuButton').click();
    cy.wait(2000);
    cy.get('#solicitudes_internasAdmin').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > :nth-child(9) > form > .btn-primary').click();
    cy.wait(2000);
    cy.get('#p_estado').select(1);
    cy.wait(2000);
    cy.get('#p_conclusiones').type('pruebaresueltoIMAGENcypress');
    cy.wait(2000);
    cy.get('input[name="imagen[]"]').should('be.visible');
    cy.wait(2000);
    cy.get('input[name="imagen[]"]').attachFile('pruebaresuelto.pdf');
    cy.wait(2000);
    cy.get('#aceptar_petmai').click();
    cy.wait(2000);

/*     cy.get('#consultarPeticiones').click();

    cy.get('#area').select(1);

    cy.get('#criterio').select(1);

    cy.get('#btn-consultarFecha').click();

    cy.get('a > img').click();

    cy.get(':nth-child(4) > #dropdownMenuButton').click();

    cy.get('#consultarPeticiones').click();

    cy.get('#area').select(2);

    cy.get('#criterio').select(1);

    cy.get('#btn-consultarFecha').click();

    cy.get('#btn-consultarFecha').click(); */




  });
});