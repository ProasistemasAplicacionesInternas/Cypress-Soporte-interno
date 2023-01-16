class comentariosPetecionPage {
  formatDate = (fecha) => {
    var today = new Date(fecha);
    var date = today.toLocaleString();

    return date;
  };
  queryDB() {
    cy.get("#p_nropeticion")
      .invoke("attr", "value")
      .then((valor) => {
        cy.task(
          "queryDb",
          "SELECT descripcion_observacion, usuario_creacion, fecha_observacion, estado.descripcion AS estado FROM observaciones_mai LEFT JOIN estado ON estado.id_estado=observaciones_mai.estado_observacion WHERE id_ticket=" +
            valor +
            " AND (estado_observacion=2 OR estado_observacion=3) ORDER BY id_observacion DESC;"
        );
      })
      .then((result) => {
        for (let i = 0; i < result.length; i++) {
            let g = i +1
          cy.get(":nth-child(" + g + ") > :nth-child(1) > .medium > #obsData")
            .invoke("attr", "value")
            .then((valor) => {
              cy.log(result[i].fecha_observacion);
              var dateT = this.formatDate(valor);
              var date = this.formatDate(result[i].fecha_observacion);
              expect(dateT).to.have.contain(date);
            });

          cy.get(
            ":nth-child(" + g + ") > :nth-child(1) > .littleMedium > #obsUser"
          )
            .invoke("attr", "value")
            .then((valor) => {
              let texto = valor.trim();
              expect(texto).to.have.contain(result[i].usuario_creacion);
            });

          cy.get(":nth-child(" + g + ") > :nth-child(1) > .little > #obsStatus")
            .invoke("attr", "value")
            .then((valor) => {
              let texto = valor.trim();
              expect(texto).to.have.contain(result[i].estado);
            });

          cy.get(":nth-child(" + g + ") > :nth-child(2) > .giant > #obs")
            .should((valor) => {
              expect(valor).to.have.value(result[i].descripcion_observacion);
            });
        }
      });
  }
}
module.exports = new comentariosPetecionPage();
