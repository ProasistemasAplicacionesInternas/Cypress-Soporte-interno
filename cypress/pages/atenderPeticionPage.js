import consultaPeticionesUsuPage from "../pages/consultaPeticionesUsuPage";
import seleccionar_peticionmaiPage from "../pages/seleccionar_peticionmaiPage";
import comentariosPetecionPage from "../pages/comentariosPetecionPage";

class  atenderPeticionPage {
    procesoAtencion(){
        seleccionar_peticionmaiPage.seleccionarpeticion(1)
        cy.wait(10)
        seleccionar_peticionmaiPage.atenderPeticion("3","No","4")
        consultaPeticionesUsuPage.elements.btnSolInternas().click()
        seleccionar_peticionmaiPage.seleccionarpeticion(1)
        comentariosPetecionPage.queryDB()
        seleccionar_peticionmaiPage.atenderPeticion("2","No","4")
        consultaPeticionesUsuPage.elements.btnSolInternas().click()
        seleccionar_peticionmaiPage.seleccionarpeticion(1)
      }
}
module.exports = new atenderPeticionPage();