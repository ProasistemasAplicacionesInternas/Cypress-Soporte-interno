const tab = require("../fixtures/data-driven/tab.json");

class consultaPeticionesPage {
  elements = {
    btnSolicitudes: () => cy.get(":nth-child(1) > #dropdownMenuButton"),
    btnInfraestructura: () => cy.get("#generar_solicitud"),
    btnAplicInternas: () => cy.get("#vista_solicitudesmai"),
  };

  formatDate = (fecha) => {
    var today = new Date(fecha);
    var date = today.toLocaleString();

    return date;
  };

  SoporteInf() {
    this.elements.btnSolicitudes().click();
    this.elements.btnInfraestructura().click();
  }

  SoporteAint() {
    this.elements.btnSolicitudes().click();
    this.elements.btnAplicInternas().click();
  }

  valTab() {
    cy.get(".col-11").should("to.contain", tab[1].title).and("be.visible");
    cy.get("thead > :nth-child(1) > :nth-child(2)")
      .invoke("text")
      .then((apartado) => {
        for (let i = 1; i < 10; i++) {
          var j = i - 1;
          if (apartado == "Producto" && i == 2) {
            cy.get("thead > :nth-child(1) > :nth-child(" + i + ")")
              .should("to.contain", "Producto")
              .and("be.visible");
            break;
          } else {
            cy.get("thead > :nth-child(1) > :nth-child(" + i + ")")
              .should("to.contain", tab[1].tabla[j])
              .and("be.visible");
          }
        }
      });
  }

  queryDB() {
    cy.get(".col-md-2 > #usuario")
      .invoke("text")
      .then((usuario) => {
        cy.task(
          "queryDb",
          "SELECT numero_peticion, fecha_peticion, peticiones.usuario, fecha_atendido, peticiones.estado, peticiones.categoria, peticiones.descripcion, peticiones.imagen, activos_internos.nombre_activo, activos_internos.codigo_activo, funcionarios.extension, funcionarios.area, funcionarios.mail, areas.descripcion AS descripcion1, categorias.nombre_categoria, estado.descripcion AS nombreestado, conclusiones, imagen2, imagen3 FROM peticiones LEFT JOIN funcionarios ON funcionarios.usuario = peticiones.usuario LEFT JOIN areas ON id_area = AREA LEFT JOIN categorias ON id_categoria = categoria LEFT JOIN estado ON id_estado = peticiones.estado LEFT JOIN activos_internos ON id_activo = activo WHERE ( peticiones.estado = 1 OR peticiones.estado = 3 )and peticiones.usuario = " +
            "'" +
            usuario +
            "'"+
            "ORDER BY numero_peticion ASC"
        ).then((result) => {
          for (let j = 1; j < result.length; j++) {
            let e = j - 1;
            const resultados = [
              result[e].numero_peticion,
              result[e].nombre_categoria,
              result[e].fecha_peticion,
              result[e].descripcion,
              result[e].nombreestado,
              result[e].fecha_atendido,
              result[e].fecha_atendido,
            ];
            for (let i = 1; i < 10; i++) {
              cy.get("tbody > :nth-child(" + j + ") > :nth-child(" + i + ")")
                .invoke("text")
                .should(($text) => {
                  var texto = $text.trim();
                  if (resultados[i - 1] == null) {
                    resultados[i - 1] = "";
                  } else {
                  }

                  switch (i) {
                    case 1:
                      var num = resultados[i - 1];
                      var str = num.toString();
                      expect(texto).to.contain(str);
                      break;

                    case 3:
                      var dateT = this.formatDate(texto);
                      var date = this.formatDate(resultados[i - 1]);
                      expect(dateT).to.contain(date);
                      break;

                    default:
                      expect(texto).to.contain(resultados[i - 1]);
                      break;
                  }
                });
            }
          }
        });
      });
  }

  queryDBMai() {
    cy.get(".col-md-2 > #usuario")
      .invoke("text")
      .then((usuario) => {
        cy.log(typeof usuario);
        cy.task(
          "queryDb",
          "SELECT id_peticionmai, descripcion_peticion, usuario_creacion, fecha_peticion, estado.descripcion AS estado_peticion, productos_mai.nombre_producto AS producto_mai, imagen, fecha_atencion, usuario_atencion, conclusiones, funcionarios.extension, funcionarios.area, funcionarios.mail, imagen2, imagen3, tipo_soportemai, tipo_soportemai.nombre, tipo_soportemai.id, req_nombre, req_justificacion FROM peticiones_mai LEFT JOIN funcionarios ON funcionarios.usuario = peticiones_mai.usuario_creacion LEFT JOIN areas ON areas.id_area = funcionarios.area LEFT JOIN productos_mai ON productos_mai.id_producto = peticiones_mai.producto_mai LEFT JOIN estado ON estado.id_estado = peticiones_mai.estado_peticion LEFT JOIN tipo_soportemai ON tipo_soportemai.id = peticiones_mai.tipo_soportemai WHERE ( estado_peticion = 1 OR estado_peticion = 3 )and peticiones_mai.usuario_creacion = " +
            "'" +
            usuario +
            "'" +
            "ORDER BY id_peticionmai ASC"
        ).then((result) => {
          for (let j = 1; j < result.length; j++) {
            let e = j - 1;
            const resultados = [
              result[e].id_peticionmai,
              result[e].producto_mai,
              result[e].fecha_peticion,
              result[e].descripcion_peticion,
              result[e].estado_peticion,
              result[e].fecha_atendido,
              result[e].fecha_atendido,
            ];
            for (let i = 1; i < 10; i++) {
              cy.get("tbody > :nth-child(" + j + ") > :nth-child(" + i + ")")
                .invoke("text")
                .should(($text) => {
                  var texto = $text.trim();
                  if (resultados[i - 1] == null) {
                    resultados[i - 1] = "";
                  } else {
                  }

                  switch (i) {
                    case 1:
                      var num = resultados[i - 1];
                      var str = num.toString();
                      expect(texto).to.contain(str);
                      break;

                    case 3:
                      var dateT = this.formatDate(texto);
                      var date = this.formatDate(resultados[i - 1]);
                      expect(dateT).to.contain(date);
                      break;

                    default:
                      expect(texto).to.contain(resultados[i - 1]);
                      break;
                  }
                });
            }
          }
        });
      });
  }
}

module.exports = new consultaPeticionesPage();
