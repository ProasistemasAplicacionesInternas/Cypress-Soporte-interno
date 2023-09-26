import loginPage from "../../pages/loginPage";
import validacionTokenPage from "../../pages/validacionTokenPage";
import validacionCodigoPage from "../../pages/validacionCodigoPage";

const test = require("../../fixtures/data-driven/login.json");

const login = () => {
  cy.visit("http://localhost/HelisaSoporteInterno/login.php");
  loginPage.Alert();
  loginPage.typeUsername("codigo");
  loginPage.typePassword(test[0].password);
  loginPage.clickLogin();
};
const loginB = () => {
  cy.visit("http://localhost/HelisaSoporteInterno/login.php");
  loginPage.Alert();
  loginPage.typeUsername("token");
  loginPage.typePassword(test[0].password);
  loginPage.clickLogin();
};

const loginC = () => {
  cy.visit("http://localhost/HelisaSoporteInterno/login_peticiones.php");
  loginPage.Alert();
  loginPage.typePeUsername("codigo");
  loginPage.typePePassword(test[0].password);
  loginPage.clickLogin();
};

const loginD = () => {
  cy.visit("http://localhost/HelisaSoporteInterno/login_peticiones.php");
  loginPage.Alert();
  loginPage.typePeUsername("token");
  loginPage.typePePassword(test[0].password);
  loginPage.clickLogin();
};

describe("tipos de login para usuarios ", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it("login con autenticacion de Google", () => {
    cy.task(
      "queryDb",
      "INSERT INTO `usuarios` (`id_usuario`, `usuario`, `clave`, `correo`, `id_roles`, `uestado`, `usuario_inactiva`, `ufecha_inactivacion`, `usuario_activa`, `ufecha_activa`, `descripcion`, `ufecha_sistema`, `validacion`, `intentos`, `fecha_registro`, `tipo_validacion`) VALUES (NULL, 'codigo', '$2y$15$eSrzi/1aAwhSsK2Hj6qqRO4c2MXkFuMO.pgYPO32UHBkKIfjj1h2S', 'calidadaplicacionesinternas@helisa.com', '1', '5', NULL, NULL, NULL, NULL, NULL, NULL, '1', '0', '2022-11-21 00:00:00', '1');"
    );
    login();
    validacionCodigoPage.validarText(1);
    validacionCodigoPage.token("codigo", 1);
    login();
    validacionCodigoPage.validarText();
    validacionCodigoPage.token("codigo");
    cy.task("queryDb", "DELETE FROM `usuarios` WHERE usuario = 'codigo'");
    cy.task("queryDb", "DELETE FROM `codigosqr` where id_usuario = 'codigo'");
  });
  it("login con autenticacion de Correo", () => {
    cy.task(
      "queryDb",
      "INSERT INTO `usuarios` (`id_usuario`, `usuario`, `clave`, `correo`, `id_roles`, `uestado`, `usuario_inactiva`, `ufecha_inactivacion`, `usuario_activa`, `ufecha_activa`, `descripcion`, `ufecha_sistema`, `validacion`, `intentos`, `fecha_registro`, `tipo_validacion`) VALUES (NULL, 'token', '$2y$15$eSrzi/1aAwhSsK2Hj6qqRO4c2MXkFuMO.pgYPO32UHBkKIfjj1h2S', 'calidadaplicacionesinternas@helisa.com', '1', '5', NULL, NULL, NULL, NULL, NULL, NULL, '1', '0', '2022-11-21 00:00:00', '2');"
    );
    loginB();
    validacionTokenPage.validarText();
    validacionTokenPage.token(1);
    cy.task("queryDb", "DELETE FROM `usuarios` WHERE usuario = 'token'");
  });
});

describe("tipos de login para funcionarios", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
 
    it("login con autenticacion de Google", () => {
      var x = Math.floor(Math.random() * 100000) + 1000;
      cy.task(
        "queryDb",
        "INSERT INTO `funcionarios` (`identificacion`, `nombre`, `mail`, `mail2`, `departamento_interno`, `area`, `cargo`, `extension`, `rol`, `usuario`, `contrasena`, `validacion`, `festado`, `fecha_sistema`, `fecha_inactivacion`, `usuario_inactivacion`, `fecha_activacion`, `usuario_activacion`, `intentos`, `fecha_registro`, `descripcion`, `centro_de_costos`, `tipo_validacion`) VALUES (" +
          x +
          ", 'coordinador de ventas', 'calidadaplicacionesinternas@helisa.com', 'calidadaplicacionesinternas@helisa.com', '5', '14', '50', '555', '4', 'codigo', '$2y$15$eSrzi/1aAwhSsK2Hj6qqRO4c2MXkFuMO.pgYPO32UHBkKIfjj1h2S', '1', '5', '2022-11-21', NULL, NULL, NULL, NULL, '0', '2022-11-21 00:00:00', NULL, '37', '1');"
      );
      loginC();
      validacionCodigoPage.validarText(1);
      validacionCodigoPage.tokenPeticiones("codigo", 1);
      loginC();
      validacionCodigoPage.validarText();
      validacionCodigoPage.tokenPeticiones("codigo");
      cy.task("queryDb", "DELETE FROM `funcionarios` WHERE usuario = 'codigo'");
      cy.task(
        "queryDb",
        "DELETE FROM `codigosqr_funcionarios` where id_usuario = 'codigo'"
      );
    });
 
  it("login con autenticacion de Correo", () => {
    var x = Math.floor(Math.random() * 100000) + 1000;
    cy.task(
      "queryDb",
      "INSERT INTO `funcionarios` (`identificacion`, `nombre`, `mail`, `mail2`, `departamento_interno`, `area`, `cargo`, `extension`, `rol`, `usuario`, `contrasena`, `validacion`, `festado`, `fecha_sistema`, `fecha_inactivacion`, `usuario_inactivacion`, `fecha_activacion`, `usuario_activacion`, `intentos`, `fecha_registro`, `descripcion`, `centro_de_costos`, `tipo_validacion`) VALUES (" +
        x +
        ", 'coordinador de ventas', 'calidadaplicacionesinternas@helisa.com', 'calidadaplicacionesinternas@helisa.com', '5', '14', '50', '555', '4', 'token', '$2y$15$eSrzi/1aAwhSsK2Hj6qqRO4c2MXkFuMO.pgYPO32UHBkKIfjj1h2S', '1', '5', '2022-11-21', NULL, NULL, NULL, NULL, '0', '2022-11-21 00:00:00', NULL, '37', '2');"
    );
    loginD();
    validacionTokenPage.validarText();
    validacionTokenPage.token(2);
    cy.task("queryDb", "DELETE FROM `funcionarios` WHERE usuario = 'token'");
  });
});
