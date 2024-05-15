class loginPage {
  elements = {
    btnalert: () => cy.get('[value="Continuar"]'),
    usuario: () => cy.get("#usuario"),
    contraseña: () => cy.get("#clave"),
    ingresar: () => cy.get("#ingresar"),
  };
  

  login(username, password = "Prueba2023**") {
    cy.wait(2000);
    this.elements.btnalert().should("be.visible").click();
    this.elements.usuario().type(username);
    this.elements.contraseña().type(password);
    this.elements.ingresar().click();
  }
}

module.exports = new loginPage();
