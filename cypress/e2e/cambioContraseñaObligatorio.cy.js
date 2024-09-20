
import validacionTokenPage from "../pages/validacionTokenPage";

beforeEach(() => {

    cy.viewport(1600, 900);
    cy.visit("http://localhost/HelisaSoporteInterno/login.php");
    cy.wait(1000);
    cy.get('#alerta').click();
    cy.wait(1000);
    cy.get('#usuario').type('valentina.avila');
    cy.wait(1000);
    cy.get('#clave').type('Helisa12345*');
    
    cy.get('#ingresar').click();
    cy.wait(4000);
    /* cy.get('#alerta').click();
    cy.wait(3000);
    cy.get('#clave').type('H');
    cy.wait(5000);
    cy.get('#clave').type('elisa12345*');
    cy.wait(3000);
    cy.get('#confirma').type('Helisa12345*');
    cy.wait(3000);
    cy.get('#enviar').click();
    cy.wait(3000);
    cy.visit("http://localhost/HelisaSoporteInterno/login.php");
    cy.wait(3000);
    cy.get('#alerta').click();
    cy.wait(3000);
    cy.get('#usuario').type('valentina.avila');
    cy.wait(3000);
    cy.get('#clave').type('Helisa12345*');
    cy.wait(4000); */
    validacionTokenPage.token("valentina.avila");


    });
    it('opcion izquierda', () => {

        cy.wait(5000);
    });
