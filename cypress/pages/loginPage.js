class loginPage {
    elements = {
      alert: () => cy.get("p"),
      alertBtn: () => cy.get("#alerta"),
      usernameInput: () => cy.get('input[placeholder="Usuario"]'),
      passwordPeticionesInput: () => cy.get('input[placeholder="Contraseña"]'),
      usernamePeticionesInput: () => cy.get('input[placeholder="usuario"]'),
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

    typePeUsername(username) {
      this.elements.usernamePeticionesInput().type(username);
      this.elements.usernamePeticionesInput().should(($input) => {
        expect($input).to.have.attr("required");
      });
    }
  
    typePePassword(password) {
      this.elements.passwordPeticionesInput().type(password);
      this.elements.passwordPeticionesInput().should(($input) => {
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