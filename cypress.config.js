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