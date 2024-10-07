import LoginPage from "../pages/loginPage2";
import validacionCodigoPage from "../pages/validacionCodigoPage";
import validacionTokenPage from "../pages/validacionTokenPage";


const login = () => {

};

describe("Verificar Login", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.wait(3000);
    cy.visit("http://localhost/HelisaSoporteInterno/login.php");
    cy.wait(3000);
    cy.get('[value="Continuar"]').click();
    cy.wait(1000);
    cy.get("#usuario").type('valentina.avila');
    cy.wait(1000);
    cy.get("#clave").type('Helisa123*');
    cy.wait(1000);
    cy.get("#ingresar").click();
    cy.wait(1000);
    validacionTokenPage.token("valentina.avila");
    cy.wait(1000);
    cy.get('#categories').click();
    cy.wait(1000);
    cy.get('#abrirModalImagen').click();
    cy.wait(1000);
    cy.get('#created_name').type("Terrenos");
    cy.wait(1000);
    cy.get('#created_area').select("Administración");
    cy.wait(1000);
    cy.get('#createCategory > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(1000);
    cy.get('#createCategory > .modal-dialog > .modal-content > .modal-header > .btn-close').click();
    cy.wait(3000);
    cy.get('#abrirModalImagen').click();
    cy.wait(1000);
    cy.get('#created_name').type("Computadores");
    cy.wait(1000);
    cy.get('#created_area').select("Infraestructura");
    cy.wait(1000);
    cy.get('#createCategory > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(1000);
    cy.get(':nth-child(1) > :nth-child(4) > .fas').click();
    cy.wait(1000);
    cy.get('#new_name').click();
    cy.wait(1000);
    cy.get('#new_name').clear();
    cy.wait(1000);
    cy.get('#new_name').type("Computadores");
    cy.wait(1000);
    cy.get('#updateCategory > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(1000);
    cy.get('#updateCategory > .modal-dialog > .modal-content > .modal-header > .btn-close').click();
    cy.wait(1000);
    cy.get(':nth-child(1) > :nth-child(4) > .fas').click();
    cy.wait(1000);
    cy.get('#new_name').clear();
    cy.wait(1000);
    cy.get('#new_name').type("Accesorios2");
    cy.wait(1000);
    cy.get('#updateCategory > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(3000);
    cy.get(':nth-child(1) > :nth-child(4) > .fa-regular').click();
    cy.wait(3000);
    cy.get(':nth-child(2) > :nth-child(4) > .fa-regular').click();
    




  });

  it(' SI_3174', () => {

    

  });
});