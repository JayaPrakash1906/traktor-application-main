const {Client} = require('pg');
const dotenv = require('dotenv');
dotenv.config();
const client = new Client({
  host: "localhost",
  user: "postgres",
  port: "5432",
  password: "root",
  database: "postgres"
})
client.connect(function(err) {
  if(err) throw err;
  else{
    console.log("connected");
  } 
});
module.exports = client;
