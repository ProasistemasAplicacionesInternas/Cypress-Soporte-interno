# ***Gestión de cambios Act-#S502-B0***  

#### Se realiza la creacion del proyecto de cypress para soporte interno se utilizaron dependencias externas como mysql, otplib entre otras por lo tanto estos fueron los modulos creados con su contenido:
------------------------

-  ## cypress.config.js


~~~ javascript
const { defineConfig } = require('cypress');
const mysql =require("mysql")

function queryTestDb(query,config) {
  const env ={
    "db": {
        "host": "localhost",
        "user": "root",
        "password": "",
        "database":"hcloud"
      }}
  const connection = mysql.createConnection(env.db)
  connection.connect()
  return new Promise((resolve, reject) => {
    connection.query(query, (error,results)=>{
      if (error) reject(error)   
      else {
        connection.end();
        return resolve(results)
      }
  });
});
}

module.exports = defineConfig({
  chromeWebSecurity: false, 
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        queryDb: query => {
          return queryTestDb(query, config);
        }});
    },
  },
});
~~~

-  ## spec.cy.js
~~~ javascript
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})
~~~

-  ## e2e.js
~~~ javascript
// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
~~~

-  ## Package.json
~~~ json
{
  "name": "cypress",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "cypress open "
  },
  "keywords": [
    "cypress"
  ],
  "author": "Helisa Software",
  "license": "ISC",
  "devDependencies": {
    "cypress": "^12.2.0",
    "mysql": "^2.18.1",
    "otplib": "^12.0.1"
  }
}
~~~

