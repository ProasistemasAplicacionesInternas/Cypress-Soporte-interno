import loginPage from "../../pages/loginPage";
import validacionCodigoPage from "../../pages/validacionCodigoPage";
import generarSolicitudesPage from "../../pages/generarSolicitudesPage";
import consultaPeticionesPage from "../../pages/consultaPeticionesPage";
import consultaPeticionesUsuPage from "../../pages/consultaPeticionesUsuPage";
import seleccionar_peticionmaiPage from "../../pages/seleccionar_peticionmaiPage";
import atenderPeticionPage from "../../pages/atenderPeticionPage";

const test = require("../../fixtures/data-driven/login.json");

const login = () => {
  cy.visit("http://localhost/HelisaSoporteInterno/login_peticiones.php");
  loginPage.Alert();
  loginPage.typePeUsername("usuario.coordinadormai");
  loginPage.typePePassword(test[0].password);
  loginPage.clickLogin();
};

const loginC = () => {
  cy.visit("http://localhost/HelisaSoporteInterno/login.php");
  loginPage.Alert();
  loginPage.typeUsername("usuario.coordinadormai");
  loginPage.typePassword(test[0].password);
  loginPage.clickLogin();
};

const loginB = () => {
  cy.visit("http://localhost/HelisaSoporteInterno/login.php");
  loginPage.Alert();
  loginPage.typeUsername("programador");
  loginPage.typePassword(test[0].password);
  loginPage.clickLogin();
};

describe("tipos de login", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  // it("Crear solicitudes", () => {
  //   login();
  //   validacionCodigoPage.validarText();
  //   validacionCodigoPage.tokenPeticiones("funcionario.ventas");
  //   generarSolicitudesPage.SoporteInf();
  //   generarSolicitudesPage.valTab(1);
  //   cy.wait(10);
  //   generarSolicitudesPage.generarSolicitud(1, 1);
  //   generarSolicitudesPage.generarSolicitud(2, 1);
  // });

  // it("validar consulta de infraestructura", () => {
  //   login();
  //   validacionCodigoPage.validarText();
  //   validacionCodigoPage.tokenPeticiones("funcionario.ventas");
  //   consultaPeticionesPage.SoporteInf();
  //   consultaPeticionesPage.valTab();
  //   consultaPeticionesPage.queryDB();
  // });

  // it("validar consulta Aplicacionesinternas", () => {
  //   login();
  //   validacionCodigoPage.validarText();
  //   validacionCodigoPage.tokenPeticiones("funcionario.ventas");
  //   consultaPeticionesPage.SoporteAint();
  //   consultaPeticionesPage.valTab();
  //   consultaPeticionesPage.queryDBMai();
  // });
  // it("Crear soporte admin MAI", () => {
  //   loginC();
  //   validacionCodigoPage.validarText();
  //   validacionCodigoPage.token("usuario.coordinadormai");
  //   consultaPeticionesUsuPage.elements.btnSolInternas().click()
  //   generarSolicitudesPage.elements.btnGenerarSolicitud().click()
  //   generarSolicitudesPage.generarSolicitud(4, 1);
  //   consultaPeticionesUsuPage.valTab()
  //   consultaPeticionesUsuPage.queryDB()
  // });
  it("Atender soportes", () => {
    login();
    validacionCodigoPage.validarText();
    validacionCodigoPage.token("usuario.coordinadormai");
    consultaPeticionesUsuPage.elements.btnSolInternas().click();
    atenderPeticionPage.procesoAtencion()
  });
});
