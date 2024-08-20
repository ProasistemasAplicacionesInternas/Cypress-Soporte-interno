class loginPage {
  elements = {
    btnalert: () => cy.get('[value="Continuar"]'),
    usuario: () => cy.get("#f_user"),
    contraseña: () => cy.get("#f_password"),
    ingresar: () => cy.get("#ingresar"),
  };
  

  login(username, password = "Lm12345789**") {
    cy.wait(2000);
    this.elements.btnalert().should("be.visible").click();
    this.elements.usuario().type(username);
    this.elements.contraseña().type(password);
    this.elements.ingresar().click();
  }
}

module.exports = new loginPage();
