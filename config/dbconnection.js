const mysql = require("mysql")

const {host,password,user,database} = require("./config")

module.exports = () =>{
    return mysql.createConnection(
        {
            host:host,
            user:user,
            password:password,
            database:database
        }
    )
} 