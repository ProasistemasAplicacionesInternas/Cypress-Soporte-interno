# ***Gestión de cambios Act-#S502-B0***  

#### Se realiza la creacion y modificacion de algunos modulos en el proyecto de cypress para soporte interno:
------------------------

-  ## cypress.config.js
#### modificacion: 
~~~ javascript
"database":"hinfraestructura"              //linea 10 
// experimentalSessionAndOrigin: true,        //linea 28
generateOTP: require("cypress-otp"),       //linea 31
~~~

-  ## cypress/e2e/objectModel/homeLogin.cy.js
#### Creacion: 
~~~javascript
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
~~~

-  ## cypress/fixtures/data-driven/login.json
#### Creacion: 

~~~ JSON
[
    {
      "name": "usuario.administrador",
      "username": "usuario.administrador",
      "password": "Soporteinterno2022*",
      "status": true
    },

    {
      "name": "login password incorect",
      "username": "pruebas",
      "password": "Soporteinterno2022",
      "status": false
    },

    {
      "name": "login user & password incorect",
      "username": "prueba",
      "password": "Soporteinterno2022",
      "status": false
    },

    {
      "name": "login user inactive",
      "username": "pruebas.inactivo",
      "password": "Soporteinterno2022*",
      "status": false,
      "alert": "Su cuenta ha sido bloqueada, por favor restablezca contraseña"
    }
  ]
~~~

-  ## cypress/pages/loginPage.js
#### Creacion: 

~~~javascript
class loginPage {
    elements = {
      alert: () => cy.get("p"),
      alertBtn: () => cy.get("#alerta"),
      usernameInput: () => cy.get('input[placeholder="Usuario"]'),
      passwordInput: () => cy.get('input[placeholder="Contraseña"]'),
      forgot: () => cy.get("a"),
      loginBtn: () => cy.get("#ingresar"),
    };

    typeUsername(username) {
      this.elements.usernameInput().type(username);
      this.elements.usernameInput().should(($input) => {
        expect($input).to.have.attr("required");
      });
    }

    typePassword(password) {
      this.elements.passwordInput().type(password);
      this.elements.passwordInput().should(($input) => {
        expect($input).to.have.attr("required");
      });
    }


    clickLogin() {
      this.elements.loginBtn().click();
    }


    Alert(inf) {
      if (inf == undefined) {
        this.elements.alert().should(($p) => {
          expect($p).to.be.visible;
          expect($p).to.have.text(
            "El ingreso a la plataforma es solo para usuarios autorizados, se solicita no suministrar los datos de acceso a terceros."
          );
        });
        this.elements.alertBtn().click();
      } else {
        this.elements.alert().should(($p) => {
          expect($p).to.be.visible;
          expect($p).to.have.text(inf);
        });
      }
    }
  }

  module.exports = new loginPage();
~~~


-  ## cypress/pages/validacionCodigoPage.js
#### Creacion: 

~~~javascript
import { totp } from "otplib";
import { BrowserMultiFormatReader } from '@zxing/browser';

const reader = new BrowserMultiFormatReader();

class validacionCodigoPage {
  elements = {
    tittle: () => cy.get("h1"),
    localStorage: () => cy.get(".logo"),
    paso1: () => cy.get(".row > :nth-child(1) > :nth-child(2)"),
    paso2: () => cy.get(".row > :nth-child(1) > :nth-child(3)"),
    paso3: () => cy.get(".row > :nth-child(1) > :nth-child(4)"),
    paso4: () => cy.get(".row > :nth-child(1) > :nth-child(5)"),
    paso5: () => cy.get(".row > :nth-child(1) > :nth-child(6)"),
    paso6: () => cy.get(".row > :nth-child(1) > :nth-child(7)"),
    paso7: () => cy.get(".row > :nth-child(1) > :nth-child(8)"),
    token: () => cy.get("#code"),
    btnToken: () => cy.get("#btnCode"),
    QR: () => cy.get('.img-fluida'),
  };


  validarText(QR) {
    if (QR == undefined) {
      this.elements
        .tittle()
        .should("to.contain", "Autenticación de Codigo de Google");
      this.elements.paso1().should("to.contain", "1. Ingrese a la App.");
      this.elements
        .paso2()
        .should(
          "to.contain",
          '2. Por favor ingrese el codigo que le indica el aplicativo de "Google Authenticator". '
        );
      this.elements
        .paso3()
        .should("to.contain", '3. Click en el botón "Validar con Google". ');
      this.elements
        .paso4()
        .should("to.contain", "4. Este código se actualiza cada 30 segundos. ");
    } else {
      this.elements
        .tittle()
        .should("to.contain", "Autenticación de QR");
      this.elements
        .paso1()
        .should(
          "to.contain",
          '1. Por favor descargue la app "Google Authenticator".'
        );
      this.elements.paso2().should("to.contain", "2. Ingrese a la App. ");
      this.elements
        .paso3()
        .should(
          "to.contain",
          '3. En la parte inferior derecha, dele click al "+". '
        );
      this.elements
        .paso4()
        .should(
          "to.contain",
          '4. Luego de ello, de click a la primera opción "Escanear un código QR".'
        );
      this.elements.paso5().should("to.contain", "5. Escaneé el código QR. ");
      this.elements
        .paso6()
        .should("to.contain", "6. Ingrese el código que le da la app. ");
      this.elements
        .paso7()
        .should("to.contain", '7. Click en el botón "Validar con Google". ');
    }
  }

  token(QR) {
    if (QR == undefined) {
      cy.task(
        "queryDb",
        "SELECT * FROM `codigosqr` WHERE id_usuario = 'codigo'"
      ).then((consulta)=>{
        cy.task("generateOTP",consulta[0].codigo).then((result)=>{
          this.elements.token().type(result)
          this.elements.btnToken().click()
        })
      })
    } else {
      this.elements.QR().then($el =>{
        const img = $el[0];
          const image = new Image();
          image.width = img.width;
          image.height = img.height;
          image.src = img.src;
          image.crossOrigin = 'Anonymous';
          return image;
      })
      .then(image => {
        const reader = new BrowserMultiFormatReader();
        return reader.decodeFromImageElement(image[0])
      })
      .then((link) => {
        var secret = link.text.substring(59)
        cy.task("generateOTP", secret).then((result)=>{
          this.elements.token().type(result)
          this.elements.btnToken().click()
        })
      });
    }

  }
}
module.exports = new validacionCodigoPage();
~~~



-  ## cypress/pages/validacionTokenPage.js
#### Creacion: 

~~~javascript
class validacionTokenPage {
  elements = {
    tittle: () => cy.get("h1"),
    localStorage: () => cy.get(".logo"),
    paso1: () =>
      cy.get(".container1 > :nth-child(1) > :nth-child(1) > :nth-child(2)"),
    paso2: () =>
      cy.get(".container1 > :nth-child(1) > :nth-child(1) > :nth-child(3)"),
    paso3: () =>
      cy.get(".container1 > :nth-child(1) > :nth-child(1) > :nth-child(4)"),
    token: () => cy.get("#token"),
    btnToken: () => cy.get("#btnValToken"),
  };

  validarText() {
    this.elements.tittle().should("to.contain", "Autenticación por Token");
    this.elements
      .paso1()
      .should("to.contain", "1. Ingrese a su correo corporativo.");
    this.elements
      .paso2()
      .should(
        "to.contain",
        '2. Por favor ingrese el codigo que le indica el correo que recibió". '
      );
    this.elements
      .paso3()
      .should("to.contain", '3. Click en el botón "Validar con Token". ');
  }

  token(){
    cy.task("queryDb","SELECT * FROM `validacion_token` ORDER BY `validacion_token`.`fecha_token` DESC").then((result)=>{
        this.elements.token().type(result[0].token)
        this.elements.btnToken().click()
    })
  }
}
module.exports = new validacionTokenPage();
~~~

-  ## package.json
#### modificacion: 
~~~JSON
    "test": "cypress open ",                    //linea 7
    "open": "cypress run --browser chrome"      //linea 8
    "@zxing/browser": "^0.1.1",                 //linea 16
    "@zxing/library": "^0.19.1",                //linea 17
    "cypress-otp": "^1.0.3",                    //linea19 
    "mysql": "^2.18.1"                          //linea 20
~~~