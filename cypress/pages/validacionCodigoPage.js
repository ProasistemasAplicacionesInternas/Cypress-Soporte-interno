import { totp } from "otplib";


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
    QR: () => cy.get(".img-fluida"),
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
      this.elements.tittle().should("to.contain", "Autenticación de QR");
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
 
  token(usuario, QR) {
    if (QR == undefined) {
      cy.task(
        "queryDb",
        "SELECT * FROM `codigosqr` WHERE id = 49"
      ).then((consulta) => {
        console.log(consulta)
        cy.task("generateOTP", consulta[0].codigo).then((result) => {
          console.log(result);
          this.elements.token().type(result);
          this.elements.btnToken().click();
        });
      });
    } else {
      this.elements
        .QR().readCode()
        .then((link) => {
          var secret = link.text.substring(59);
          cy.task("generateOTP", secret).then((result) => {
            this.elements.token().type(result);
            this.elements.btnToken().click();
          });
        });
    }
  }

  tokenPeticiones(usuario, QR) {
    if (QR == undefined) {
      cy.task(
        "queryDb",
        "SELECT * FROM codigosqr_funcionarios WHERE id_usuario =" +
          "'" +
          usuario +
          "'"
      ).then((consulta) => {
        cy.task("generateOTP", consulta[0].codigo).then((result) => {
          this.elements.token().type(result);
          this.elements.btnToken().click();
        });
      });
    } else {
      this.elements
        .QR().wait(10).readCode()
        .then((link) => {
          cy.log(link)
          var secret = link.text.substring(49);
          cy.log(secret)
          cy.task("generateOTP", secret).then((result) => {
            this.elements.token().type(result);
            this.elements.btnToken().click();
          });
        });
    }
  }
}
module.exports = new validacionCodigoPage();
