import loginPage from "../../pages/loginPage";
import validacionCodigoPage from "../../pages/validacionCodigoPage";
import generarSolicitudesPage from "../../pages/generarSolicitudesPage";
import consultaPeticionesPage from "../../pages/consultaPeticionesPage";
import consultaPeticionesUsuPage from "../../pages/consultaPeticionesUsuPage";
import seleccionar_peticionmaiPage from "../../pages/seleccionar_peticionmaiPage";
import atenderPeticionPage from "../../pages/atenderPeticionPage";

const test = require("../../fixtures/data-driven/login.json");

const login = () => {
  cy.visit("http://localhost/HelisaSoporteInterno/login.php");
  loginPage.Alert();
  loginPage.typePeUsername("jhon.torres");
  loginPage.typePePassword(test[0].password);
  loginPage.clickLogin();
};
describe("tipos de login", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  it("Atender soportes", () => {
    login();
    validacionCodigoPage.validarText();
    validacionCodigoPage.token("jhon.torres");
    cy.contains('Gestion De Procesos').click();
    cy.contains('Datos Funcionarios').click();
    cy.contains('Informacion de Funcionarios').should('be.visible');
    cy.get('#funcionarioDatos').select(19);
    cy.contains('Activo').should('be.visible');
    cy.contains('Inactivo').should('be.visible');
    cy.wait(2000);
    cy.get('#opcionEstado').select(1);
    cy.contains('Activo').should('be.visible');
    cy.wait(2000);
    cy.get('#opcionEstado').select(2);
    cy.contains('Inactivo').should('be.visible');
    cy.wait(2000);
    cy.get('#opcionEstado').type("jhon");
  });
});
/*

describe("Interacción con un elemento de selección", () => {
  it("Debería seleccionar una opción y verificar los resultados", () => {
    // Ir a la página web
    cy.visit("http://localhost/HelisaSoporteInterno/dashboard_funcionarios.php#"); // Reemplaza con la URL de la página que deseas probar

    // Interactuar con el elemento de selección
    cy.get("select[name='opciones']").select("Opción 2"); // Reemplaza con el selector y opción correctos

    // Esperar un momento para que se carguen los resultados
    cy.wait(2000); // Puedes ajustar el tiempo de espera según sea necesario

    // Verificar los resultados
    cy.get(".resultados").should("contain", "Resultado esperado"); // Reemplaza con el selector y texto de resultados esperados
  });
});
*/ 