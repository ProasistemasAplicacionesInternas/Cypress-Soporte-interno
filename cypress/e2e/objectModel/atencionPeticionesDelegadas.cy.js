import LoginPage from "../../pages/loginPage2";
import validacionCodigoPage from "../../pages/validacionCodigoPage";
import validacionTokenPage from "../../pages/validacionTokenPage";

const login = () => {
  cy.viewport(1280, 720)
  cy.visit("http://localhost/HelisaSoporteInterno/login_peticiones.php");
  cy.wait(1000);
  LoginPage.login("coordMAI7");
  cy.wait(1000);
  cy.wait(1000);
  validacionTokenPage.token("coordMAI7");
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
    cy.get(':nth-child(2) > .nav-link').click();
    cy.wait(2500);
    cy.get(':nth-child(2) > [style="text-align:center"] > form > [type="button"]').click();
    cy.wait(1500);
    cy.get('#aprobado').select(2);
    cy.wait(1500);
    cy.get('#conclusiones').type("Se aprueba solicitud de accesos - Prueba Cypress");
    cy.wait(1500);
    cy.get('#guardarAprociones').click();
    cy.wait(1500);
    cy.get(':nth-child(5) > #dropdownMenuButton').click();
    cy.wait(1500);
    cy.get('#accesos').click();
    cy.wait(1500);
    cy.get(':nth-child(2) > .nav-link').click();
    cy.wait(2500);
  });
});