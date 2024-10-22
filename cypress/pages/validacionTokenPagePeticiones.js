class validacionTokenPage {
  elements = {
    tittle: () => cy.get("h1"),
    localStorage: () => cy.get(".logo"),
    paso1: () =>
      cy.get(".container1 > :nth-child(1) > :nth-child(1) > :nth-child(2)") ,
    paso2: () =>
      cy.get(".container1 > :nth-child(1) > :nth-child(1) > :nth-child(3)"),
    paso3: () =>
      cy.get(".container1 > :nth-child(1) > :nth-child(1) > :nth-child(4)"),
    token: () => cy.get("#tokenF"),

    btnToken: () => cy.get("#btnValToken"),
  };

  token(URL) {
    if (URL == 1) {

      cy.task(
        "queryDb",
        "SELECT * FROM `validacion_token` ORDER BY `validacion_token`.`fecha_token` DESC"
      ).then((result) => {
        this.elements.token().type(result[0].token);
        this.elements.btnToken().click();
      });
    } else {
      cy.wait(5000);
      cy.task(
        "queryDb",
        "SELECT * FROM `validacion_token` ORDER BY `validacion_token`.`fecha_token` DESC"
      ).then((result) => {
        cy.get("#tokenF").type(result[0].token);
        this.elements.btnToken().click();
      });
    }
  }
}
module.exports = new validacionTokenPage();
