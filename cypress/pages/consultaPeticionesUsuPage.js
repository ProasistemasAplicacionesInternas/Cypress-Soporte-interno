const tab = require("../fixtures/data-driven/tab.json");

class consultaPeticionesUsuPage {
  elements = {
    btnSolInternas: () => cy.get("#solicitudes_internas"),
  };
  
  formatDate = (fecha) => {
    var today = new Date(fecha);
    var date = today.toLocaleString();

    return date;
  };
  valTab() {
    this.elements.btnSolInternas().click();
    cy.get(".col-11 > h6").should("to.contain", tab[2].title).and("be.visible");
    for (let i = 1; i < 10; i++) {
      var j = i - 1;
      cy.get("thead > :nth-child(1) > :nth-child(" + i + ")")
        .should("to.contain", tab[2].tabla[j])
        .and("be.visible");
    }
  }

  queryDB() {
    cy.task(
      "queryDb",
      "SELECT id_peticionmai, descripcion_peticion, usuario_creacion, fecha_peticion, estado.descripcion AS estado_peticion, productos_mai.nombre_producto AS producto_mai, imagen, fecha_atencion, usuario_atencion, conclusiones, funcionarios.extension, funcionarios.area, funcionarios.mail, imagen2, imagen3, tipo_soportemai, tipo_soportemai.nombre, tipo_soportemai.id, req_nombre, req_justificacion FROM peticiones_mai LEFT JOIN funcionarios ON funcionarios.usuario = peticiones_mai.usuario_creacion LEFT JOIN areas ON areas.id_area = funcionarios.area LEFT JOIN productos_mai ON productos_mai.id_producto = peticiones_mai.producto_mai LEFT JOIN estado ON estado.id_estado = peticiones_mai.estado_peticion LEFT JOIN tipo_soportemai ON tipo_soportemai.id = peticiones_mai.tipo_soportemai WHERE ( estado_peticion = 1 OR estado_peticion = 3 ) AND (tipo_soportemai=1 OR tipo_soportemai=3 OR tipo_soportemai=4) ORDER BY id_peticionmai ASC;"
    ).then((result) => {
      for (let j = 1; j < result.length; j++) {
        let e = j - 1;
        const resultados = [
          result[e].id_peticionmai,
          result[e].usuario_creacion,
          result[e].fecha_peticion,
          result[e].area,
          result[e].extension,
          result[e].producto_mai,
          result[e].usuario_atencion,
          result[e].estado_peticion,
          result[e].nombre,
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
  }
}

module.exports = new consultaPeticionesUsuPage();
