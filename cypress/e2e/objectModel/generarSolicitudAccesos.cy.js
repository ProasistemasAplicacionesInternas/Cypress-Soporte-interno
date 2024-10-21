import LoginPage from "../../pages/loginPage2";
import validacionCodigoPage from "../../pages/validacionCodigoPage";
import validacionTokenPage from "../../pages/validacionTokenPage";

const login = () => {
  cy.viewport(1280, 720)
  cy.visit("http://localhost/HelisaSoporteInterno/login_peticiones.php");
  cy.wait(1000);
  LoginPage.login("usuario.580");
  cy.wait(1000);
  cy.wait(1000);
  validacionTokenPage.token("usuario.580");
};
describe("Atender Peticiones Delegadas", () => {
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

  it('opcion izquierda', () => {
    cy.wait(1500);
    cy.get(':nth-child(5) > #dropdownMenuButton').click();
    cy.wait(1500);
    cy.get('#accesos').click();
    cy.wait(1500);
    cy.get('.col-1 > a > img').click();
    cy.wait(1500);
    cy.get('#funcionarioAlterno').select(9);
    cy.wait(1500);
    cy.get('#buscador').type('Dymai');
    cy.wait(1500);
    cy.get('#plataformas114').click();
    cy.wait(1500);
    cy.get('#descripcion').type('Se solicita plataforma - Cypress');
    cy.wait(1500);
    cy.get('#crear_peticion_accesos').click();
    cy.wait(1500);
    cy.get(':nth-child(5) > #dropdownMenuButton').click();
    cy.wait(1500);
    cy.get('#accesos').click();
    cy.wait(1500);
    cy.get(':nth-child(3) > .nav-link').click();
    cy.wait(1500);
    cy.get('[style="text-align:center"] > form > [type="button"]').click();
    cy.wait(1500);
    cy.get('#nombre_usuario0').type('usuario.cypress');
    cy.wait(1500);
    cy.get('#clave0').type('Helisa123*');
    cy.wait(1500);
    cy.get('.btn-primary').click();
    cy.wait(1500);
    cy.get(':nth-child(5) > #dropdownMenuButton').click();
    cy.wait(1500);
    cy.get('#accesos').click();
    cy.wait(1500);
    cy.get(':nth-child(3) > .nav-link').click();
    cy.wait(2500);
  });
});