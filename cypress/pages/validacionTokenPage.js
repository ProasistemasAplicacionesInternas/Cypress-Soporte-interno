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

  token(URL) {
    if (URL == 1) {
      cy.task(
        "queryDb",
        "SELECT * FROM `validacion_token` ORDER BY `validacion_token`.`fecha_token` DESC"
      ).then((result) => {
        cy.wait(4000);
        cy.get("#tokenF").type(result[0].token);
        this.elements.btnToken().click();
      });
    } else {
      cy.task(
        "queryDb",
        "SELECT * FROM `validacion_token` ORDER BY `validacion_token`.`fecha_token` DESC"
      ).then((result) => {
        cy.wait(4000);
        cy.get("#token").type(result[0].token);
        this.elements.btnToken().click();
      });
    }
  }
}
module.exports = new validacionTokenPage();
