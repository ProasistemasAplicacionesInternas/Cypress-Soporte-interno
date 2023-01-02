import loginPage from "../../pages/loginPage";
import validacionTokenPage from "../../pages/validacionTokenPage";
import validacionCodigoPage from "../../pages/validacionCodigoPage";

const test = require("../../fixtures/data-driven/login.json");

const login = () => {
  cy.visit("http://localhost/infraestructura/login.php");
  loginPage.Alert();
  loginPage.typeUsername("codigo");
  loginPage.typePassword(test[0].password);
  loginPage.clickLogin();
};
  const loginB = () => {
    cy.visit("http://localhost/infraestructura/login.php");
    loginPage.Alert();
    loginPage.typeUsername("token");
    loginPage.typePassword(test[0].password);
    loginPage.clickLogin();
  };

describe("tipos de login", () => {
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
    validacionCodigoPage.token(1);
    login();
    validacionCodigoPage.validarText();
    validacionCodigoPage.token();
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
    validacionTokenPage.token();
    cy.task("queryDb", "DELETE FROM `usuarios` WHERE usuario = 'token'");
  });
});
