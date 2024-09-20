const { defineConfig } = require('cypress');
const mysql =require("mysql2")

function queryTestDb(query,config) {
  const env ={
    "db": {
        "host": "localhost",
        "user": "root",
        "password": "",
        "database":"hinterno"
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
  video: true,
  e2e: {
    // experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      on("task", {
        generateOTP: require("cypress-otp"),
        queryDb: query => {
          return queryTestDb(query, config);
        }});
    },
  },
});