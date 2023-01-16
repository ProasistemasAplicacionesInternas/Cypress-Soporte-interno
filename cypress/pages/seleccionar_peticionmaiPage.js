const tab = require("../fixtures/data-driven/tab.json");
import consultaPeticionesUsuPage from "../pages/consultaPeticionesUsuPage";
class seleccionar_peticionmaiPage {
  elements = {
    Cod: () => cy.get(".peq > label"),
    Fecha: () => cy.get(":nth-child(2) > :nth-child(2) > label"),
    Usuario: () => cy.get(":nth-child(2) > :nth-child(3) > label"),
    Ext: () => cy.get(".little > label"),
    Correo: () => cy.get(".normal > label"),
    Producto: () => cy.get(":nth-child(4) > .bigGiant > label"),
    Descripcion: () => cy.get(":nth-child(6) > .giant > label"),
    Estado: () => cy.get(":nth-child(8) > :nth-child(1) > #label"),
    Versión: () => cy.get(":nth-child(2) > #label"),
    Peticion: () => cy.get(":nth-child(3) > #label"),
    Observaciones: () => cy.get(":nth-child(10) > .giant > label"),
    btnSolInternas: () => cy.get("#solicitudes_internas")
  };

  elementsB = {
    estado: () => cy.get('#p_estado'), 
    version: () => cy.get('#version'), 
    tipo: () => cy.get('#soporteMai'),
    observacion: () =>cy.get('#p_conclusiones') ,
    btnAceptar: () => cy.get('#aceptar_petmai')  
  }

  formatDate = (fecha) => {
    var today = new Date(fecha);
    var date = today.toLocaleString();

    return date;
  };

  seleccionarpeticion(num) {
    cy.get(
      ":nth-child(" + num + ") > :nth-child(11) > form > .btn-primary"
    ).click();
  }

  valTab() {
    this.seleccionarpeticion(1);
    let claves = Object.keys(this.elements);
    for (let i = 0; i < 11; i++) {
      var j = i + 1;
      let clave = claves[i];
      cy.get(this.elements[clave]).should("to.contain", tab[3].tabla[i]);
    }
  }

  queryDB() {
    cy.get("#p_nropeticion")
      .invoke("attr", "value")
      .then((valor) => {
        cy.task(
          "queryDb",
          "SELECT id_peticionmai, descripcion_peticion, usuario_creacion, fecha_peticion, estado.descripcion AS estado_peticion, productos_mai.nombre_producto AS producto_mai, imagen, fecha_atencion, usuario_atencion, conclusiones, funcionarios.extension, funcionarios.area, funcionarios.mail, imagen2, imagen3, tipo_soportemai, tipo_soportemai.nombre, tipo_soportemai.id, req_nombre, req_justificacion FROM peticiones_mai LEFT JOIN funcionarios ON funcionarios.usuario = peticiones_mai.usuario_creacion LEFT JOIN areas ON areas.id_area = funcionarios.area LEFT JOIN productos_mai ON productos_mai.id_producto = peticiones_mai.producto_mai LEFT JOIN estado ON estado.id_estado = peticiones_mai.estado_peticion LEFT JOIN tipo_soportemai ON tipo_soportemai.id = peticiones_mai.tipo_soportemai WHERE id_peticionmai =" +
            valor
        ).then((result) => {
          const resultados = [
            result[0].id_peticionmai,
            result[0].fecha_peticion,
            result[0].usuario_creacion,
            result[0].extension,
            result[0].mail,
            result[0].producto_mai,
            result[0].descripcion_peticion,
          ];
          for (let i = 0; i < resultados.length; i++) {
            switch (i) {
              case 1:  
                cy.get("#p_" + tab[3].tablac[i])
                  .invoke("attr", "value")
                  .then((valor) => {
                      var dateT = this.formatDate(valor);
                      var date = this.formatDate(resultados[i]);
                      expect(dateT).to.have.contain(date);
                    });
                break;

                case 6:  
                cy.get("#p_" + tab[3].tablac[i])
                .then((valor) => { 
                expect(valor).to.have.contain(resultados[i]);
              });
                break;

              default:
                cy.get("#p_" + tab[3].tablac[i])
                  .invoke("attr", "value")
                  .then((valor) => {
                  let texto = valor.trim()  
                  expect(texto).to.have.contain(resultados[i]);
                });
                break;
            }
          }
        });
      });
  }

  atenderPeticion(estado,version,tipo){
    this.elementsB.estado().select(estado)
    this.elementsB.version().select(version)
    this.elementsB.tipo().select(tipo)
    this.elementsB.observacion().type('Atencion de soporte')
    this.elementsB.btnAceptar().click()
  }


}
module.exports = new seleccionar_peticionmaiPage();
