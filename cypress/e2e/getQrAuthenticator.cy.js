import LoginPage from "../pages/loginPage2";
import validacionCodigoPage from "../pages/validacionCodigoPage";

const login = () => {
    cy.viewport(1280, 720)
    cy.visit("http://localhost/helisasoporteinterno/login.php");
    LoginPage.login("eduar.fonseca");
};

describe("Verificar Login", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    login();
  });

  it('Verificar vista de escaneo de código QR', () => {
    cy.wait(6000);
  });
});
