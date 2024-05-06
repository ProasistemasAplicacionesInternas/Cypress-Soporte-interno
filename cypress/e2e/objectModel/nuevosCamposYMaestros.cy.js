import loginPage from "../../pages/loginPage";
import validacionCodigoPage from "../../pages/validacionCodigoPage";

const test = require("../../fixtures/data-driven/login.json");

function loginSoporteInterno() {
  cy.visit("http://localhost/infraestructura/login.php");
  loginPage.Alert();
  cy.wait(2000);
  cy.get('#alerta').click(); 
  cy.wait(2000);
  loginPage.typeUsername("administrador");
  loginPage.typePassword(test[0].password);
  cy.wait(2000);
  loginPage.clickLogin();
  validacionCodigoPage.validarText();
  validacionCodigoPage.token("administrador");
  cy.wait(2000);
}

describe("Soporte Interno", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  beforeEach("Login y token", () => {
    loginSoporteInterno();
    cy.wait(2000);
  });

  it("Ver Nuevos Campos en Activos fijos", () => {
    cy.wait(2000);
    cy.get('#activos').click();
    cy.wait(2000);
    cy.get('.col-1').find('a').click();
    cy.wait(2000);
    cy.get('#af_codigo').type("7425678128");
    cy.wait(2000);
    cy.get('#af_serial').type("70708098614");
    cy.wait(2000);
    cy.get('#af_marca').type("Lenovo-P.l-08");
    cy.wait(2000);
    cy.get('#af_modelo').type("Touchpad-2GGsa");
    cy.wait(2000);
    cy.get('#af_nombre').type("Prueeba cypres 8");
    cy.wait(2000);
    cy.get('#af_fechaCompra').clear();
    cy.wait(2000);
    cy.get('#af_fechaCompra').type("2024-05-06");
    cy.wait(2000);
    cy.get('#af_categoria').select(1);
    cy.wait(2000);
    cy.get('#af_estado').select(1);
    cy.wait(2000);
    cy.get('#af_area').select(2);
    cy.wait(2000);
    cy.get('#af_ubicacion').select(1);
    cy.wait(2000);
    cy.get('#costoCompra').type("18920000");
    cy.wait(2000);
    cy.get('#vidaUtil').type("8");
    cy.wait(2000);
    cy.get('#estadoAct').select(4);
    cy.wait(2000);
    cy.get('input[type=file]').selectFile('imagen (4).png');
    cy.wait(2000);
    cy.get('#af_observaciones').type("Ingresamos una observacion del activo nuevamente");
    cy.wait(2000);
    cy.get('#crear_activoFijo').click(); //crear activo
    cy.get('.col-4 > .mt-4').click();
    
    cy.get('#activos').click();
    cy.wait(2000);
    cy.get('#criterio').select(2);
    cy.wait(2000);
    cy.get('#nombreActivo').type("MiniComponente");
    cy.wait(2000);
    cy.get('#btn-consultarNombre').click();
    cy.wait(2000);
    cy.get(':nth-child(9) > form > .btn').click();
    cy.wait(2000);
    cy.get('#m_fecha').clear();
    cy.wait(2000);
    cy.get('#m_fecha').type("2024-05-06");
    cy.wait(2000);
    cy.get('#m_costo').type("150000");
    cy.wait(1000);
    cy.get('#estadoAct').select(2);
    cy.wait(2000);
    cy.get('#m_descripcion').type("Ingresamos la nueva observacion, En este caso por prueba Cypress 8");
    cy.wait(2000);
    cy.get('#crear_mantenimiento').click(); // crear mantenimiento
    cy.wait(2000);
        cy.get('#activos').click(); //<-MODAL OBSERVACIONES
        cy.wait(2000);
        cy.get('#criterio').select(2);
        cy.wait(2000);
        cy.get('#nombreActivo').type("MiniComponente");
        cy.wait(2000);
        cy.get('#btn-consultarNombre').click();
        cy.wait(2000);
        cy.get(':nth-child(9) > form > .btn').click();
        cy.wait(2000);
        cy.get('#verObservaciones').click();
        cy.wait(2000);
        cy.get('.modal-footer > .btn').click();
        cy.wait(1000);
        cy.get(':nth-child(11) > :nth-child(2) > .mt-4').click();
   cy.wait(2000); 
   cy.get('#uvts').click();  //<-- MAESTRO UVTS
    cy.get('#yearUvt').type("2018");
    cy.wait(2000);
    cy.get('#valueUvt').type("504887");
    cy.wait(2000);
            cy.get('#saveYear').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > .editable').clear();
    cy.wait(2000);
    cy.get(':nth-child(1) > .editable').type("470650");
    cy.wait(2000);
    cy.get('tbody > :nth-child(1) > :nth-child(3) > .btn').click(); //<-- Actualiza valor uvt
       cy.wait(2000);
     cy.get('#categories').click(); 
    cy.wait(2000);
    cy.get('#abrirModalImagen').click();
    cy.wait(2000);
    cy.get('#created_name').type("AA cypress"); //crear categoria 
    cy.wait(2000);
    cy.get('#created_area').select(1);
    cy.wait(2000);
    cy.get('#createCategory > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(4) > .fas').click();
    cy.wait(2000);
    cy.get('#new_name').clear(); //modificar categoria
    cy.wait(2000);
    cy.get('#new_name').type("AAA Final");
    cy.wait(2000);
    cy.get('#new_area').select(2);
    cy.wait(2000);
    cy.get('#updateCategory > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(3000);
     cy.get(':nth-child(1) > :nth-child(4) > .fa-regular').click() // inhabilitar categoria
     cy.wait(3000);
     cy.get(':nth-child(1) > :nth-child(4) > .fa-regular').click();  //<-- Habilita  Categoria
    cy.wait(2000);
    cy.get('.seccionSecond > .container > .row > .col-4 > img').click(); //Crear grupo
    cy.wait(2000);
    cy.get('#createdNameGroup').type("Almarios");
    cy.wait(2000);
    cy.get('#createdCategoryGroup').select(2);
    cy.wait(2000);
    cy.get('#createGroup > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click(); //guardar crear grupo
    cy.wait(2000);

    cy.get(':nth-child(1) > :nth-child(5) > .fas').click(); //Modificar Grupo
    cy.wait(2000);
    cy.get('#nameGroup').clear();
    cy.wait(2000);
    cy.get('#nameGroup').type("armario");
    cy.wait(2000);
    cy.get('#newCategoryGroup').select(3);
    cy.wait(2000);
    cy.get('#updateGroup > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click(); //guardar modificar grupo
    cy.wait(3000);
     cy.get(':nth-child(1) > :nth-child(5) > .fa-regular').click(); //inhabilitar Grupo 
     cy.wait(3000);
     cy.get(':nth-child(1) > :nth-child(5) > .fa-regular').click();  //<-- Habilita  Grupo
     cy.wait(2000);
  });
    after(() => {
    cy.log('Se finaliza la prueba');
  });
});