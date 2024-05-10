import LoginPage from "../pages/loginPage2";
import validacionCodigoPage from "../pages/validacionCodigoPage";
import validacionTokenPage from "../pages/validacionTokenPage";


const login = () => {
  cy.viewport(1280, 720)
  cy.visit("http://localhost/helisasoporteinterno/login_peticiones.php");
  cy.wait(1000);
  LoginPage.login("eduar.fonseca");
  cy.wait(1000);
  cy.wait(1000);
  validacionCodigoPage.tokenPeticiones("eduar.fonseca");
};

describe("Verificar Login", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
    beforeEach(() => {
      login();
    });
    it('opcion izquierda', () => {
       
      cy.wait(5000);
    });
    
});
