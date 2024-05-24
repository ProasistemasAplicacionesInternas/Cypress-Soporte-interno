import LoginPage from "../../pages/loginPage2";
import validacionCodigoPage from "../../pages/validacionCodigoPage";


const login = () => {
  cy.viewport(1280, 720)
  cy.visit("http://localhost/infraestructura/login.php");
  cy.wait(1000);
  LoginPage.login("administrador");
  cy.wait(1000);
  cy.wait(1000);
  validacionCodigoPage.token("administrador");
};

describe("Verificar Login", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
    beforeEach(() => {
      login();
    });
    it('opcion izquierda', () => {
       
      cy.wait(2000);
      cy.get('#activos').click();
      cy.wait(2000);
      cy.get('.col-1').find('a').click();
      cy.wait(2000);
      cy.get('#af_codigo').type("5678892045");
      cy.wait(2000);
      cy.get('#af_serial').type("10056998760");
      cy.wait(2000);
      cy.get('#af_marca').type("HP_Luks");
      cy.wait(2000);
      cy.get('#af_modelo').type("AL-1930");
      cy.wait(2000);
      cy.get('#af_nombre').type("Prueba Nuevos Campos");
      cy.wait(2000);
      cy.get('#af_fechaCompra').clear();
      cy.wait(2000);
      cy.get('#af_fechaCompra').type("2024-05-24");
      cy.wait(2000);
      cy.get('#af_categoria').select(7);
      cy.wait(2000);
      cy.get('#af_estado').select(1);
      cy.wait(2000);
      cy.get('#af_area').select(2);
      cy.wait(2000);
      cy.get('#af_ubicacion').select(1);
      cy.wait(2000);
      cy.get('#costoCompra').type("7800936");
      cy.wait(2000);
      cy.get('#vidaUtil').type("5");
      cy.wait(2000);
      cy.get('#sede').select(1);
      cy.wait(2000);
      cy.get('#estadoAct').select(4);
      cy.wait(2000);
      cy.get('input[type=file]').selectFile('imagen (4).png');
      cy.wait(2000);
      cy.get('#af_ram').type("800");
      cy.wait(2000);
      cy.get('#af_discoDuro').type("600");
      cy.wait(2000);
      cy.get('#af_procesador').type("5000");
      cy.wait(2000);
      cy.get('#hostName').type("BAT789Kn12");
      cy.wait(2000);
      cy.get('#af_so').type("Linux");
      cy.wait(2000);
      cy.get('#af_licenciaSo').type("TKL512");
      cy.wait(2000);
      cy.get('#af_dominio').type("Helisa");
      cy.wait(2000);
      cy.get('#af_office').type("WDS512");
      cy.wait(2000);
      cy.get('#af_antivirus').type("ATV518");
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
      cy.get('#m_fecha').type("2024-05-24");
      cy.wait(2000);
      cy.get('#m_costo').type("180000");
      cy.wait(1000);
      cy.get('#estadoAct').select(2);
      cy.wait(2000);
      cy.get('#m_descripcion').type("Ingresamos la nueva observacion, En este caso por prueba Cypress 10");
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
      cy.get('#yearUvt').type("2017");
      cy.wait(2000);
      cy.get('#valueUvt').type("504982");
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

