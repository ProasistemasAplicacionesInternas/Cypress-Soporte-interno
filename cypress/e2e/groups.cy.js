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
    cy.wait(2000);
    cy.get("#usuario").type('valentina.avila');
    cy.wait(2000);
    cy.get("#clave").type('Helisa123*');
    cy.wait(2000);
    cy.get("#ingresar").click();
    cy.wait(2000);
    validacionTokenPage.token("valentina.avila");
    cy.wait(2000);
    cy.get('#categories').click();
    cy.wait(2000);
    cy.get('.seccionSecond > .container > .row > .col-4 > img').click();
    cy.wait(2000);
    cy.get('#createdNameGroup').type('Camaras');
    cy.wait(2000);
    cy.get('#createdCategoryGroup').select('Accesorios');
    cy.wait(2000);
    cy.get('#createGroup > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(2000);
    cy.get('#createGroup > .modal-dialog > .modal-content > .modal-header > .btn-close').click();
    cy.wait(2000);
    cy.get('.seccionSecond > .container > .row > .col-4 > img').click();
    cy.wait(2000);
    cy.get('#createdNameGroup').type('Escritorios');
    cy.wait(2000);
    cy.get('#createdCategoryGroup').select('Accesorios');
    cy.wait(2000);
    cy.get('#createGroup > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(5) > .fas').click();
    cy.wait(2000);
    cy.get('#nameGroup').click();
    cy.wait(2000);
    cy.get('#nameGroup').clear();
    cy.wait(2000);
    cy.get('#nameGroup').type('Camaras');
    cy.wait(2000);
    cy.get('#updateGroup > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(2000);
    cy.get('#updateGroup > .modal-dialog > .modal-content > .modal-header > .btn-close').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(5) > .fas').click();
    cy.wait(2000);
    cy.get('#nameGroup').click();
    cy.wait(2000);
    cy.get('#nameGroup').clear();
    cy.wait(2000);
    cy.get('#nameGroup').type('Diademas');
    cy.wait(2000);
    cy.get('#updateGroup > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > :nth-child(5) > .fa-regular').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > :nth-child(5) > .fa-regular').click();
    cy.wait(2000);
  });

  it(' SI_3176', () => {

    

  });
});