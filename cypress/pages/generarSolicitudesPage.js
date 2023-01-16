const tab = require("../fixtures/data-driven/tab.json");

class generarSolicitudesPage {
  elements = {
    btnSolicitudes: () => cy.get(":nth-child(1) > #dropdownMenuButton"),
    btnInfraestructura: () => cy.get("#generar_solicitud"),
    btnAplicInternas: () => cy.get("#generar_solicitud"),
    btnGenerarSolicitud: () => cy.get(".col-1 > a > img"),
    title: () => cy.get(".mt-3"),
    tArea: () => cy.get(":nth-child(1) > .col-3 > .form-group > label"),
    tCategoria: () => cy.get("#divCategoria > label"),
    tDescripcion: () => cy.get(":nth-child(9) > .col-3 > .form-group > label"),
    tCargar: () => cy.get(".form-group > :nth-child(1) > label"),
    tProducto: () => cy.get("#divProducto > label"),
    tPeticion: () => cy.get("#divPeticion > label"),
    area: () => cy.get("#area_peticion"),
    categoria: () => cy.get("#p_categoria"),
    descripcion: () => cy.get("#p_descripcion"),
    imagen: () => cy.get('input[type="file"]'),
    producto: () => cy.get("#productoMai"),
    peticion: () => cy.get("#soporteMai"),
    nomRequeimiento: () => cy.get("#req_Name"),
    justificacion: () => cy.get("#req_Justification"),
    btnEnviar: () => cy.get("#btn-enviar_peticion"),
  };
  SoporteInf() {
    this.elements.btnSolicitudes().click();
    this.elements.btnInfraestructura().click();
    this.elements.btnGenerarSolicitud().click();
  }

  valTab(num) {
    if (num == 1) {
      this.elements.area().select("1");
      let claves = Object.keys(this.elements);
      this.elements
        .title()
        .should("to.contain", tab[0].title)
        .and("be.visible");
      for (let i = 5; i < 9; i++) {
        var j = i - 5;
        let clave = claves[i];
        cy.get(this.elements[clave])
          .should("to.contain", tab[0].tabla[j])
          .and("be.visible");
      }
    } else {
      this.elements.area().select("2");
      const titleApli = [
        this.elements.tArea(),
        this.elements.tProducto(),
        this.elements.tPeticion(),
        this.elements.tDescripcion(),
        this.elements.tCargar(),
      ];
      this.elements
        .title()
        .should("to.contain", tab[0].title)
        .and("be.visible");
      for (let i = 0; i < 5; i++) {
        var j = i + 4;
        cy.wait(10);
        titleApli[i].should("to.contain", tab[0].tabla[j]).and("be.visible");
      }
    }
  }

  generarSolicitud(area, imagen) {
    switch (area) {
      case 1:
        cy.task(
          "queryDb",
          "SELECT id_categoria, nombre_categoria FROM categorias WHERE id_categoria!=3 AND id_categoria!=10 AND id_categoria!=11 AND id_categoria!=14 AND uso=1 AND id_categoria!=16 ORDER BY nombre_categoria"
        ).then((result) => {
          var rand = Math.floor(Math.random() * result.length) + 1;
          var rValue = result[rand].id_categoria;
          this.elements.area().select("1");
          this.elements.categoria().select("" + rValue + "");
          this.elements.descripcion().type("Esto es una prueba");
          if (imagen == undefined) {
          } else {
            this.elements.imagen().selectFile("test.png");
          }
          this.elements.btnEnviar().click();
        });
        break;
      case 2:
        for (let i = 1; i < 4; i++) {
          this.SoporteInf();
          var rValue = Math.floor(Math.random() * 14) + 1;
          var value = i;
          this.elements.area().select("2");
          this.elements.producto().select(rValue);
          this.elements.peticion().select(value);
          if (value == 3) {
            this.elements.nomRequeimiento().type("requerimiento de prueba");
            this.elements.justificacion().type("requerimiento de prueba");
          } else {
          }
          this.elements.descripcion().type("Esto es una prueba");
          if (imagen == undefined) {
          } else {
            this.elements.imagen().selectFile("test.png");
          }
          this.elements.btnEnviar().click();
        }
        break;
      case 4:
        var rValue = Math.floor(Math.random() * 14) + 1;
        this.elements.area().select("2");
        this.elements.producto().select(rValue);
        this.elements.peticion().select(4);
        this.elements.descripcion().type("Esto es una prueba");
        if (imagen == undefined) {
        } else {
          this.elements.imagen().selectFile("test.png");
        }
        this.elements.btnEnviar().click();
        break;
    }
  }
}

module.exports = new generarSolicitudesPage();
